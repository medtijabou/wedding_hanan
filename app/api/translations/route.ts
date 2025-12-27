import { type NextRequest, NextResponse } from "next/server"
import { getTranslations } from "@/lib/translations"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const language = (searchParams.get("language") || "fr") as "fr" | "ar" | "en"

  try {
    const translations = await getTranslations(language)
    return NextResponse.json(translations)
  } catch (error) {
    console.error("Error fetching translations:", error)
    return NextResponse.json({ error: "Failed to fetch translations" }, { status: 500 })
  }
}
