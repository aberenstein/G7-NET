"use server"

import { ContactSchema } from "@/lib/validations/ContactSchema"
import { ContactForm } from "@/types"
import { sendEmail } from "@/lib/nodemailer"
import { useTranslations } from "next-intl"

export const sendEmailAction = async (formData: ContactForm) => {
  const t = useTranslations("contact")

  const validatedFields = ContactSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  const { name, email, subject, message } = validatedFields.data

  const result = await sendEmail({
    name,
    email,
    subject,
    message,
  })

  if (result.error) {
    return { error: t("form.error") }
  }

  return { success: t("form.success") }
}
