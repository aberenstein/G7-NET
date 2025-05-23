"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { routing } from "@/i18n/routing"

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("nav")
  const locale = useLocale()

  function onSelectChange(nextLocale: string) {
    const segments = pathname.split("/")
    segments[1] = nextLocale
    const newPath = segments.join("/") || "/"
    router.replace(newPath)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100 shadow-md py-2"
          : "bg-gray-100 backdrop-blur-sm border-b border-gray-100"
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
              {t("about")}
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href="#technology"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("technology")}
            </Link>
            <Link
              href="#industries"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("industries")}
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("testimonials")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-black hover:text-[#48b4e8] transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-[#48b4e8] hover:bg-[#48b4e8]/90 text-white">
              {t("cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Select onValueChange={onSelectChange} aria-label="Select language">
              <SelectTrigger className="w-[70px] h-8 text-sm cursor-pointer">
                <SelectValue placeholder={locale.toUpperCase()} />
              </SelectTrigger>
              <SelectContent>
                {routing.locales.map((lng) => (
                  <SelectItem className="cursor-pointer" key={lng} value={lng}>
                    {lng.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  )
}
