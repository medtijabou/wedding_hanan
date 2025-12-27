import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = getSupabaseClient()

    const { data, error } = await supabase.from("contact_messages").insert([body]).select()

    if (error) {
      console.error("Error creating contact message:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing contact:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
