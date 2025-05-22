import { motion } from "framer-motion"
import Link from "next/link"
import {
  MapPin,
  MessageSquare,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations("contact")
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
              {["twitter", "linkedin", "facebook", "instagram"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#48b4e8]/10 flex items-center justify-center hover:bg-[#48b4e8] hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social === "twitter" && <Twitter className="h-5 w-5" />}
                    {social === "linkedin" && <Linkedin className="h-5 w-5" />}
                    {social === "facebook" && <Facebook className="h-5 w-5" />}
                    {social === "instagram" && (
                      <Instagram className="h-5 w-5" />
                    )}
                  </Link>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <form className="space-y-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48b4e8]"
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </div>
                  <Button className="w-full bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white">
                    {t("form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
