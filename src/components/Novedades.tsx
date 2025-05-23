"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function NewsSection() {
  const t = useTranslations("news")

  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[url('/hero-image.png')] bg-cover bg-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-black/80">{t("description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#48b4e8]/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#48b4e8]/10 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/novedades-image.png"
                alt="Latest News"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center space-x-4 text-white mb-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{t("date")}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{t("category")}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t("highlight")}
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              <span className="text-[#48b4e8]">{t("highlight")}</span>
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-black/80">{t("paragraph1")}</p>
              <p className="text-black/80">{t("paragraph2")}</p>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              {["AI", "Cloud", "DevOps", "Mobile"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button className="bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white">
              {t("cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
