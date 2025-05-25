"use server"

import { ContactSchema } from "@/lib/validations/ContactSchema"
import { ContactForm } from "@/types"
import { sendEmail } from "@/lib/nodemailer"

export const sendEmailAction = async (formData: ContactForm, successMssg: string, errorMssg: string) => {
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
    return { error: errorMssg }
  }

  return { success: successMssg }
}
