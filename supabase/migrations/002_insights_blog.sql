-- Insights / blog posts (used by lib/supabase/insights.ts and app/insights/*)
-- Apply after 001_initial_schema.sql (reuses public.update_updated_at_column).

-- ============================================================================
-- INSIGHT CATEGORY (aligned with Insight TypeScript union)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.insights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    category TEXT NOT NULL CHECK (
        category IN (
            'Forex Education',
            'Gold Strategy',
            'Risk Management',
            'Trading Psychology',
            'Market Breakdown',
            'Technical Analysis'
        )
    ),
    tags TEXT[] NOT NULL DEFAULT '{}',
    views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0),
    featured BOOLEAN NOT NULL DEFAULT false,
    read_time INTEGER CHECK (read_time IS NULL OR read_time >= 0),
    published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    cover_image_url TEXT,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.insights IS 'Marketing / education blog posts (ClubLiquidez insights)';

ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Anonymous + public site: only published posts
DROP POLICY IF EXISTS "Public read published insights" ON public.insights;
CREATE POLICY "Public read published insights"
    ON public.insights FOR SELECT
    TO anon, authenticated
    USING (published = true);

-- Logged-in users (admin UI): list drafts and all posts — tighten in production with an admin role
DROP POLICY IF EXISTS "Authenticated read all insights" ON public.insights;
CREATE POLICY "Authenticated read all insights"
    ON public.insights FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Authenticated insert insights" ON public.insights;
CREATE POLICY "Authenticated insert insights"
    ON public.insights FOR INSERT
    TO authenticated
    WITH CHECK (
        auth.uid() IS NOT NULL
        AND (author_id IS NULL OR author_id = auth.uid())
    );

DROP POLICY IF EXISTS "Authenticated update insights" ON public.insights;
CREATE POLICY "Authenticated update insights"
    ON public.insights FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated delete insights" ON public.insights;
CREATE POLICY "Authenticated delete insights"
    ON public.insights FOR DELETE
    TO authenticated
    USING (true);

-- ============================================================================
-- RPC: atomic view counter (called from incrementInsightViews)
-- ============================================================================
CREATE OR REPLACE FUNCTION public.increment_insight_views(insight_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    UPDATE public.insights
    SET views = views + 1
    WHERE id = insight_id
      AND published = true;
END;
$$;

COMMENT ON FUNCTION public.increment_insight_views(UUID) IS 'Increments views for published insights only; SECURITY DEFINER for anon increments';

GRANT EXECUTE ON FUNCTION public.increment_insight_views(UUID) TO anon, authenticated;

-- ============================================================================
-- Indexes
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_insights_published_published_at
    ON public.insights (published, published_at DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS idx_insights_category ON public.insights (category);
CREATE INDEX IF NOT EXISTS idx_insights_featured ON public.insights (featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_insights_author_id ON public.insights (author_id);

-- ============================================================================
-- updated_at trigger (function created in 001_initial_schema.sql)
-- ============================================================================
DROP TRIGGER IF EXISTS update_insights_updated_at ON public.insights;
CREATE TRIGGER update_insights_updated_at
    BEFORE UPDATE ON public.insights
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
