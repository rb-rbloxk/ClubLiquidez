import { NextResponse } from 'next/server'

/**
 * Fetches Google Place reviews via Places API (New).
 * Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local.
 *
 * Get your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 * Enable "Places API (New)" in Google Cloud Console.
 */
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google Places API not configured', reviews: [] },
      { status: 200 }
    )
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews',
      },
      next: { revalidate: 3600 }, // cache 1 hour
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Google Places API error:', res.status, err)
      return NextResponse.json({ error: 'Failed to fetch reviews', reviews: [] }, { status: 200 })
    }

    const data = (await res.json()) as {
      reviews?: Array<{
        name?: string
        rating?: number
        text?: { text?: string }
        originalText?: { text?: string }
        relativePublishTimeDescription?: string
        authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
      }>
    }

    const reviews = (data.reviews ?? []).map((r) => ({
      name: r.authorAttribution?.displayName ?? 'Google User',
      rating: Math.round(r.rating ?? 5),
      text: r.text?.text ?? r.originalText?.text ?? '',
      relativeTime: r.relativePublishTimeDescription ?? '',
      profilePhotoUri: r.authorAttribution?.photoUri,
    }))

    return NextResponse.json({ reviews })
  } catch (e) {
    console.error('Google reviews fetch error:', e)
    return NextResponse.json({ error: 'Failed to fetch reviews', reviews: [] }, { status: 200 })
  }
}
