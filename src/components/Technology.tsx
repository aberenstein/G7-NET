import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { t } from "@/i18n"

export function Technology() {
  return (
    <section id="technology" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1da178]/10 text-[#1da178] text-sm font-medium">
            {t("technology.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t("technology.title")}
          </h2>
          <p className="text-black/80">{t("technology.description")}</p>
        </motion.div>

        <Tabs defaultValue="web" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-[#1da178] data-[state=active]:text-white"
            >
              {t("technology.tabs.web")}
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-[#1da178] data-[state=active]:text-white"
            >
              {t("technology.tabs.mobile")}
            </TabsTrigger>
            <TabsTrigger
              value="cloud"
              className="data-[state=active]:bg-[#1da178] data-[state=active]:text-white"
            >
              {t("technology.tabs.cloud")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="web" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {t("technology.web.title")}
                </h3>
                <p className="text-black/80 mb-6">
                  {t("technology.web.description")}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#1da178]/20 flex items-center justify-center mr-3">
                        <Star className="h-3 w-3 text-[#1da178]" />
                      </div>
                      <span className="text-black">
                        {t(`technology.web.item${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#1da178]/5 rounded-lg transform rotate-3"></div>
                <Image
                  src="/blog-covers/blog-demo-2.png"
                  alt="Web Technologies"
                  width={500}
                  height={400}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {t("technology.mobile.title")}
                </h3>
                <p className="text-black/80 mb-6">
                  {t("technology.mobile.description")}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#1da178]/20 flex items-center justify-center mr-3">
                        <Star className="h-3 w-3 text-[#1da178]" />
                      </div>
                      <span className="text-black">
                        {t(`technology.mobile.item${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#1da178]/5 rounded-lg transform -rotate-3"></div>
                <Image
                  src="/mobile-app-development.png"
                  alt="Mobile Technologies"
                  width={500}
                  height={400}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="cloud" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {t("technology.cloud.title")}
                </h3>
                <p className="text-black/80 mb-6">
                  {t("technology.cloud.description")}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#1da178]/20 flex items-center justify-center mr-3">
                        <Star className="h-3 w-3 text-[#1da178]" />
                      </div>
                      <span className="text-black">
                        {t(`technology.cloud.item${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#1da178]/5 rounded-lg transform rotate-3"></div>
                <Image
                  src="/cloud-computing-technologies.png"
                  alt="Cloud Technologies"
                  width={500}
                  height={400}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
