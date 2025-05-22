// next-i18next.config.mjs
/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr"],
    localeDetection: true,
  },
}

export default nextI18NextConfig
