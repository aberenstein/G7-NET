"use client"

import {
  MapPin,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { useState, useTransition } from "react"
import { sendEmailAction } from "@/actions/email-action"

export function Contact() {
  const t = useTranslations("contact")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(async () => {
      const result = await sendEmailAction(formData)
      if ("error" in result) {
        setStatus(t("form.error"))
      } else {
        setStatus(t("form.success"))
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }
    })
  }
  
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
              {t("badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t("title")}
            </h2>
            <p className="text-black/80 mb-8">{t("description")}</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-[#48b4e8]/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#48b4e8]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">
                    {t("address.title")}
                  </h3>
                  <p className="text-black/70">{t("address.value")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-[#48b4e8]/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-[#48b4e8]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">
                    {t("email.title")}
                  </h3>
                  <p className="text-black/70">{t("email.value")}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
            </div>
          </div>
          <div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-black"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48b4e8]"
                      placeholder={t("form.namePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-black"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48b4e8]"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-black"
                    >
                      {t("form.subject")}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48b4e8]"
                      placeholder={t("form.subjectPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-black"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48b4e8]"
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white"
                  >
                    {isPending ? t("form.sending") : t("form.submit")}
                  </Button>
                  {status && (
                    <p className="text-sm text-center text-red-500 mt-2">{status}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
