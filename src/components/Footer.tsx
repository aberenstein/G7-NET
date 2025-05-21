import Link from "next/link"
import {
  Sparkles,
  MapPin,
  MessageSquare,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"
import { t } from "@/i18n"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="G7NET" width={100} height={100} />
            </div>
            <p className="text-white/70 mb-6">{t("footer.description")}</p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook", "instagram"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#48b4e8] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social === "twitter" && <Twitter className="h-4 w-4" />}
                    {social === "linkedin" && <Linkedin className="h-4 w-4" />}
                    {social === "facebook" && <Facebook className="h-4 w-4" />}
                    {social === "instagram" && (
                      <Instagram className="h-4 w-4" />
                    )}
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#48b4e8] transition-colors"
                  >
                    {t(`footer.quickLinks.link${index}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#48b4e8] transition-colors"
                  >
                    {t(`footer.services.service${index}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#48b4e8] mr-3 mt-0.5" />
                <span className="text-white/70">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 text-[#48b4e8] mr-3 mt-0.5" />
                <span className="text-white/70">
                  {t("footer.contact.email")}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t("companyName")}.{" "}
            {t("footer.copyright")}
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-white/70 text-sm hover:text-[#48b4e8] transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-white/70 text-sm hover:text-[#48b4e8] transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
