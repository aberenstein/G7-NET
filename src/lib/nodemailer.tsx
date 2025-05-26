import nodemailer from "nodemailer"
import { ContactFormEmail } from "@/components/email-template"
import { render } from "@react-email/render"

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
    subject: "Nueva consulta desde G7 Net website",
    html: emailHtml,
    text: "",
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { error: true }
  }
}
