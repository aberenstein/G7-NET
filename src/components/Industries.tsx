import { motion } from "framer-motion"
import {
  Building2,
  Factory,
  ShoppingCart,
  Heart,
  GraduationCap,
  Plane,
  Car,
  Banknote,
} from "lucide-react"
import { useTranslations } from "next-intl"

export function Industries() {
  const t = useTranslations("industries")
  return (
    <section id="industries" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#48b4e8]/10 flex items-center justify-center mx-auto mb-4">
                {index === 1 && (
                  <Building2 className="h-8 w-8 text-[#48b4e8]" />
                )}
                {index === 2 && <Factory className="h-8 w-8 text-[#48b4e8]" />}
                {index === 3 && (
                  <ShoppingCart className="h-8 w-8 text-[#48b4e8]" />
                )}
                {index === 4 && <Heart className="h-8 w-8 text-[#48b4e8]" />}
                {index === 5 && (
                  <GraduationCap className="h-8 w-8 text-[#48b4e8]" />
                )}
                {index === 6 && <Plane className="h-8 w-8 text-[#48b4e8]" />}
                {index === 7 && <Car className="h-8 w-8 text-[#48b4e8]" />}
                {index === 8 && <Banknote className="h-8 w-8 text-[#48b4e8]" />}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {t(`industry${index}.title`)}
              </h3>
              <p className="text-sm text-black/70">
                {t(`industry${index}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
