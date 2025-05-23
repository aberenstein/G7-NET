"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function About() {
  const t = useTranslations("about")
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#48b4e8]/10 text-[#48b4e8] text-sm font-medium">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-3">
            {t("title")}
          </h2>
          <p className="text-black/80 max-w-4xl text-left mx-auto mb-2 max-md:text-center max-md:max-w-3xl">
            {t("description1")}
          </p>
          <p className="text-black/80 max-w-4xl text-left mx-auto max-md:text-center max-md:max-w-3xl">
            {t("description2")}
          </p>
        </div>

        {/* Modified team members section to use 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {/* First Member */}
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[350px] relative">
              <Image
                src={"/Web-Guillermos-Rivaben-1-uai-720x960.jpg"}
                alt={"Team Member"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="grayscale object-contain object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-2">
                {t("firstMember.name")}
              </h3>
              <div>
                <p className="text-black/80">{t("firstMember.description")}</p>
              </div>
              <div className="mt-4">
                {t("firstMember.linkedin") && (
                  <Link href={t("firstMember.linkedin")} aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Second Member */}
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[350px] relative">
              <Image
                src={"/Web-Ignacio-Nores-1-uai-720x960.jpg"}
                alt={"Team Member"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="grayscale object-contain object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-2">
                {t("secondMember.name")}
              </h3>
              <div>
                <p className="text-black/80">{t("secondMember.description")}</p>
              </div>
              <div className="mt-4">
                {t("secondMember.linkedin") && (
                  <Link href={t("secondMember.linkedin")} aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Third Member */}
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[350px] relative">
              <Image
                src={"/team-member.png"}
                alt={"Team Member"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="grayscale object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-2">
                {t("thirdMember.name") || t("secondMember.name")}
              </h3>
              <div>
                <p className="text-black/80">
                  {t("thirdMember.description") ||
                    t("secondMember.description")}
                </p>
              </div>
              <div className="mt-4">
                {(t("thirdMember.linkedin") || t("secondMember.linkedin")) && (
                  <Link
                    href={
                      t("thirdMember.linkedin") || t("secondMember.linkedin")
                    }
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Fourth Member */}
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[350px] relative">
              <Image
                src={"/team-member.png"}
                alt={"Team Member"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="grayscale object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[#48b4e8] mb-2">
                {t("fourthMember.name") || t("secondMember.name")}
              </h3>
              <div>
                <p className="text-black/80">
                  {t("fourthMember.description") ||
                    t("secondMember.description")}
                </p>
              </div>
              <div className="mt-4">
                {(t("fourthMember.linkedin") || t("secondMember.linkedin")) && (
                  <Link
                    href={
                      t("fourthMember.linkedin") || t("secondMember.linkedin")
                    }
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
