"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
export function Hero() {
  const t = useTranslations("hero")
  const router = useRouter()
  return (
    <div className="h-screen relative w-full overflow-hidden bg-[url('/hero-image.jpg')] flex flex-col items-center justify-center rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
            {t("badge")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            {t("title.part1")}{" "}
            <span className="text-[#48b4e8]">{t("title.highlight")}</span>{" "}
            {t("title.part2")}
          </h1>
          <p className="text-base md:text-lg text-black/80 mb-8 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => router.push("#contact")}
              className="bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white px-6 py-2 text-sm h-11 w-44"
            >
              {t("primaryCta")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
