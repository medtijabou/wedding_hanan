declare module "@sendgrid/mail" {
  interface MailData {
    to: string | string[]
    from: string
    subject: string
    text?: string
    html?: string
  }

  const sgMail: {
    setApiKey: (key: string) => void
    send: (data: MailData) => Promise<any>
  }

  export default sgMail
}
