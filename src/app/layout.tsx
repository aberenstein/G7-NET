import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Lading Page - G7NET",
  description: "Lading Page - G7NET",
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { locale } = params

  return (
    <html lang={locale}>
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  )
}
