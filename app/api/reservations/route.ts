export const runtime = "nodejs"

import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const supabase = getSupabaseClient()
    
    // Detectamos el idioma enviado desde React (por defecto francés)
    const lang = body.language || "fr"

    // 1. Insertar en Supabase
    const { data, error } = await supabase
      .from("reservations")
      .insert([body])
      .select()

    if (error) {
      console.error("Error creating reservation:", error)
      return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 })
    }

    // 2. --- CONFIGURACIÓN DE TRADUCCIONES PARA EL EMAIL ---
    const translations: any = {
      es: {
        subject: "Confirmación de reserva - Ziana Hanane",
        title: "Detalles de tu Reserva",
        name: "Nombre",
        date: "Fecha de boda",
        services: "Servicios",
        thanks: "Gracias por confiar en nosotros. Te contactaremos pronto."
      },
      fr: {
        subject: "Confirmation de réservation - Ziana Hanane",
        title: "Détails de votre Réservation",
        name: "Nom",
        date: "Date du mariage",
        services: "Services",
        thanks: "Merci de votre confiance. Nous vous contacterons bientôt."
      },
      ar: {
        subject: "تأكيد الحجز - زيانة حنان",
        title: "تفاصيل الحجز الخاص بك",
        name: "الاسم",
        date: "تاريخ الزفاف",
        services: "الخدمات",
        thanks: "شكراً لثقتكم بنا. سنتواصل معكم قريباً."
      },
      en: {
        subject: "Reservation Confirmation - Ziana Hanane",
        title: "Your Reservation Details",
        name: "Name",
        date: "Wedding Date",
        services: "Services",
        thanks: "Thank you for your trust. We will contact you soon."
      }
    }

    const t = translations[lang] || translations.fr
    const isRtl = lang === "ar"

    // 3. --- ENVOI D'EMAIL ---
    if (body.email) {
      try {
        const { full_name, email, phone, wedding_date, guest_count, services, message } = body

        await sgMail.send({
          to: email,
          bcc: process.env.SENDGRID_SENDER_EMAIL!, // Recibes copia tú
          from: process.env.SENDGRID_SENDER_EMAIL!,
          subject: t.subject,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; direction: ${isRtl ? 'rtl' : 'ltr'}; text-align: ${isRtl ? 'right' : 'left'};">
              <h2 style="color: #d4af37;">${t.title}</h2>
              <p><strong>${t.name}:</strong> ${full_name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>${t.date}:</strong> ${wedding_date}</p>
              <p><strong>Invitados:</strong> ${guest_count || '---'}</p>
              <p><strong>${t.services}:</strong> ${services?.join(", ") || "---"}</p>
              <p><strong>Mensaje:</strong> ${message || '---'}</p>
              <hr />
              <p style="font-weight: bold;">${t.thanks}</p>
            </div>
          `,
        })
      } catch (mailError: any) {
        console.error("SendGrid Detailed Error:", mailError.response?.body || mailError)
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing reservation:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}