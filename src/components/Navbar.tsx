import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { t } from "@/i18n"
import Image from "next/image"

export function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="G7NET" width={100} height={100} />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#technology"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.technology")}
            </Link>
            <Link
              href="#industries"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.industries")}
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </nav>
          <div>
            <Button className="bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white">
              {t("nav.cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
