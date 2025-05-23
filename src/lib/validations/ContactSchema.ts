import { z } from "zod"

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }).max(20, {
    message: "El nombre debe tener menos de 20 caracteres",
  }),
  email: z.string().email({ message: "El email es requerido" }),
  subject: z.string().min(1, { message: "El asunto es requerido" }).max(100, {
    message: "El asunto debe tener menos de 100 caracteres",
  }),
  message: z.string().min(1, { message: "El mensaje es requerido" }).max(500, {
    message: "El mensaje debe tener menos de 200 caracteres",
  }),
})
