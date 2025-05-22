import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Boxes } from "./ui/background-boxes"
import { ArrowRight, BookOpen } from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("hero")
  return (
    <div className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes className="opacity-25" />
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
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white px-6 py-2 text-sm">
              {t("primaryCta")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-black/20 text-black hover:bg-[#e7e6e6] px-6 py-2 text-sm"
            >
              {t("secondaryCta")}
              <BookOpen className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
