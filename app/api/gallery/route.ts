import { type NextRequest, NextResponse } from "next/server"
import { getGalleryItems } from "@/lib/translations"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get("category") || undefined

  try {
    const items = await getGalleryItems(category)
    return NextResponse.json(items)
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 })
  }
}
