import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { t, tString } from "@/i18n"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1da178]/10 text-[#1da178] text-sm font-medium">
            {t("testimonials.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-black/80">{t("testimonials.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={`/placeholder.svg?height=60&width=60&query=professional headshot ${index}`}
                        alt={tString(`testimonials.testimonial${index}.name`)}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">
                        {t(`testimonials.testimonial${index}.name`)}
                      </h3>
                      <p className="text-sm text-black/70">
                        {t(`testimonials.testimonial${index}.position`)}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-[#1da178] fill-[#1da178]"
                      />
                    ))}
                  </div>
                  <p className="text-black/80 italic">
                    "{t(`testimonials.testimonial${index}.quote`)}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
