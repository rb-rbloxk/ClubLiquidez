import BlogPostClient from './BlogPostClient'

export async function generateStaticParams() {
  return [{ id: '_placeholder' }]
}

export default function Page() {
  return <BlogPostClient />
}
