import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Testimonials() {
  const t = useTranslations("testimonials")
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
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
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="h-full border-none shadow-lg">
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={`/placeholder.svg?height=60&width=60&query=professional headshot ${index}`}
                        alt={t(`testimonial${index}.name`)}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">
                        {t(`testimonial${index}.name`)}
                      </h3>
                      <p className="text-sm text-black/70">
                        {t(`testimonial${index}.position`)}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-[#48b4e8] fill-[#48b4e8]"
                      />
                    ))}
                  </div>
                  <p className="text-black/80 italic">
                    &quot;{t(`testimonial${index}.quote`)}&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
