import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Importa los archivos de traducción
import es from "../public/locales/es/common.json"
import en from "../public/locales/en/common.json"
import fr from "../public/locales/fr/common.json"

export const resources = {
  es: { common: es },
  en: { common: en },
  fr: { common: fr },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
