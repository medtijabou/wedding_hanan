export const runtime = "nodejs"

import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!) // clé SendGrid

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = getSupabaseClient()

    // Insérer la réservation dans Supabase
    const { data, error } = await supabase
      .from("reservations")
      .insert([body])
      .select()

    if (error) {
      console.error("Error creating reservation:", error)
      return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 })
    }

    // --- ENVOI D'EMAIL ---
    if (body.email) {
      try {
        await sgMail.send({
          to: body.email, // email du client
          from: process.env.SENDGRID_SENDER_EMAIL!, // ton email vérifié
          subject: "Confirmation de réservation",
          text: `Bonjour ${body.full_name},\n\nVotre réservation a été enregistrée avec succès !\n\nMerci.`,
          html: `<p>Bonjour <strong>${body.full_name}</strong>,</p><p>Votre réservation a été enregistrée avec succès !</p><p>Merci.</p>`,
        })
      } catch (mailError) {
        console.error("Error sending email:", mailError)
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing reservation:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
