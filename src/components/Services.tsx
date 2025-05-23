import Link from "next/link"
import {
  ChevronRight,
  Code,
  LayoutGrid,
  Globe,
  Laptop,
  Sparkles,
  Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function Services() {
  const t = useTranslations("services")
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#48b4e8]/10 flex items-center justify-center mb-6">
                    {index === 1 && <Code className="h-6 w-6 text-[#48b4e8]" />}
                    {index === 2 && (
                      <LayoutGrid className="h-6 w-6 text-[#48b4e8]" />
                    )}
                    {index === 3 && (
                      <Globe className="h-6 w-6 text-[#48b4e8]" />
                    )}
                    {index === 4 && (
                      <Laptop className="h-6 w-6 text-[#48b4e8]" />
                    )}
                    {index === 5 && (
                      <Sparkles className="h-6 w-6 text-[#48b4e8]" />
                    )}
                    {index === 6 && (
                      <Users className="h-6 w-6 text-[#48b4e8]" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {t(`service${index}.title`)}
                  </h3>
                  <p className="text-black/70 mb-4">
                    {t(`service${index}.description`)}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#48b4e8] font-medium hover:underline group"
                  >
                    {t("learnMore")}
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
