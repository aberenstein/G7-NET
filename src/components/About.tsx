import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Lightbulb } from "lucide-react"
import { t } from "@/i18n"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1da178]/10 text-[#1da178] text-sm font-medium">
              {t("about.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t("about.title")}
            </h2>
            <p className="text-black/80 mb-6">{t("about.description1")}</p>
            <p className="text-black/80 mb-8">{t("about.description2")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-[#1da178]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#1da178]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">
                    {t("about.feature1.title")}
                  </h3>
                  <p className="text-sm text-black/70">
                    {t("about.feature1.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-[#1da178]/10 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-[#1da178]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">
                    {t("about.feature2.title")}
                  </h3>
                  <p className="text-sm text-black/70">
                    {t("about.feature2.description")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#1da178]/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#1da178]/10 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder-k3ed0.png"
                alt="About Us"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
