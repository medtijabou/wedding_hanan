export const runtime = "nodejs"

import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = getSupabaseClient()

    // 1. Insertar en Supabase
    const { data, error } = await supabase
      .from("reservations")
      .insert([body])
      .select()

    if (error) {
      console.error("Error creating reservation:", error)
      return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 })
    }

    // 2. --- ENVOI D'EMAIL ---
    if (body.email) {
      try {
        // Extraemos los datos del body (los mismos nombres que usas en React)
        const { full_name, email, phone, wedding_date, guest_count, services, message } = body

        await sgMail.send({
          to: email, // El cliente recibe su confirmación
          bcc: process.env.SENDGRID_SENDER_EMAIL!, // TÚ recibes una copia con todos los datos
          from: process.env.SENDGRID_SENDER_EMAIL!,
          subject: `Nueva reserva: ${full_name}`,
          text: `Reserva de ${full_name}. Teléfono: ${phone}. Fecha: ${wedding_date}. Mensaje: ${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2>Detalles de la Reserva</h2>
              <p><strong>Nombre:</strong> ${full_name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Fecha de boda:</strong> ${wedding_date}</p>
              <p><strong>Invitados:</strong> ${guest_count}</p>
              <p><strong>Servicios:</strong> ${services?.join(", ") || "Ninguno"}</p>
              <p><strong>Mensaje:</strong> ${message}</p>
              <hr />
              <p>Esta es una copia de la confirmación enviada al cliente.</p>
            </div>
          `,
        })
      } catch (mailError: any) {
        // Esto te ayudará a ver en los logs de Vercel/Terminal por qué falla
        console.error("SendGrid Detailed Error:", mailError.response?.body || mailError)
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing reservation:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}