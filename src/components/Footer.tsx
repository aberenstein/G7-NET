"use client"

import {
  MapPin,
  MessageSquare,
} from "lucide-react"

import Image from "next/image"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="G7NET" width={100} height={100} />
            </div>
            <p className="text-white/70 mb-6">{t("description")}</p>
            <div className="flex space-x-4"></div>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-bold mb-6">{t("contact.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#48b4e8] mr-3 mt-0.5" />
                <span className="text-white/70">{t("contact.address")}</span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 text-[#48b4e8] mr-3 mt-0.5" />
                <span className="text-white/70">{t("contact.email")}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6"></div>
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} G7 Net. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
