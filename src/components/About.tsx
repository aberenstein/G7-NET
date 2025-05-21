import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { t } from "@/i18n"
import Link from "next/link"

export function About() {
  const teamMembers = [
    {
      id: 1,
      name: "GUILLERMO RIVABEN",
      image: "/team-member.png",
      paragraphs: [
        "As the CEO at La Nación Group Guillermo lead the digital and cultural transformation of a traditional media company breaking a paradigm shift.",
        "Prior to that, he was General Manager at Telecom Personal and fueled its growth in a market revolutionized by smartphones and mobile internet. He positioned it as a market leader in revenues and Ebitda. Before that as its CMO he managed the development of the first 3G service in the country. He was key in the startup of Telecom Personal back in 1994.",
        "From 1999 to 2003 he launched the AT&T operations in Latin America as a Regional Marketing VP for Argentina and Brazil.",
      ],
    },
    {
      id: 2,
      name: "IGNACIO NORES",
      image: "/team-member.png",
      paragraphs: [
        "As the VP consumer market at Entel Peru he was key at leading the startup of the operation. He led the sales, marketing and operations teams resulting in a 4X revenue growth in 4yrs.",
        "Prior to that as Telecom Personal's CMO, he had the assertiveness and creativity to inspire the team in continually breaking the barriers of traditional marketing to find new ways of competing against regional players. He led the value added services and data explosion resulting in a regional benchmark in data revenue growth.",
        "Prior to that he launched the B2B business as part of the founding team at Despegar.com.",
      ],
    },
    {
      id: 3,
      name: "IGNACIO NORES",
      image: "/team-member.png",
      paragraphs: [
        "As the VP consumer market at Entel Peru he was key at leading the startup of the operation. He led the sales, marketing and operations teams resulting in a 4X revenue growth in 4yrs.",
        "Prior to that as Telecom Personal's CMO, he had the assertiveness and creativity to inspire the team in continually breaking the barriers of traditional marketing to find new ways of competing against regional players. He led the value added services and data explosion resulting in a regional benchmark in data revenue growth.",
        "Prior to that he launched the B2B business as part of the founding team at Despegar.com.",
      ],
    },
    {
      id: 4,
      name: "IGNACIO NORES",
      image: "/team-member.png",
      paragraphs: [
        "As the VP consumer market at Entel Peru he was key at leading the startup of the operation. He led the sales, marketing and operations teams resulting in a 4X revenue growth in 4yrs.",
        "Prior to that as Telecom Personal's CMO, he had the assertiveness and creativity to inspire the team in continually breaking the barriers of traditional marketing to find new ways of competing against regional players. He led the value added services and data explosion resulting in a regional benchmark in data revenue growth.",
        "Prior to that he launched the B2B business as part of the founding team at Despegar.com.",
      ],
    },
  ]
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-2">
            ABOUT US
          </h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-black/80 max-w-3xl mx-auto">
            {t("companyName")} founders have 25+ years executive experience in
            the TMT industries driving significant value creation in large
            telecom & media companies.
          </p>
        </motion.div>

        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[280px_1fr] gap-8 items-start"
            >
              <div className="w-[280px] h-[350px] relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="280px"
                  className="grayscale object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#48b4e8] mb-6">
                  {member.name}
                </h3>
                <div className="space-y-4">
                  {member.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-black/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
