"use client"

import { Building, Building2, SatelliteDish, Atom } from "lucide-react"
import { useTranslations } from "next-intl"

export function Industries() {
  const t = useTranslations("industries")
  return (
    <section id="industries" className="py-20 md:py-32 bg-gray-50 bg-[url('/hero-image.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-black/80">{t("description")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#48b4e8]/10 flex items-center justify-center mx-auto mb-4">
                {index === 1 && <SatelliteDish className="h-8 w-8 text-[#48b4e8]" />}
                {index === 2 && <Building className="h-8 w-8 text-[#48b4e8]" />}
                {index === 3 && <Atom className="h-8 w-8 text-[#48b4e8]" />}
                {index === 4 && <Building2 className="h-8 w-8 text-[#48b4e8]" />}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {t(`industry${index}.title`)}
              </h3>
              <p className="text-sm text-black/70">
                {t(`industry${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
