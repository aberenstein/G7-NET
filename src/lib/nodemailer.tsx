import nodemailer from "nodemailer"
import { render } from "@react-email/render"
import { ContactFormEmail } from "@/components/email-template"

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  const emailHtml = await render(
    <ContactFormEmail
      name={name}
      email={email}
      subject={subject}
      message={message}
    />
  )

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Nueva consulta desde GrupoGr website",
    html: emailHtml,
    text: "",
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { error: "Error al enviar el email" }
  }
}
