import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resource } from "./locales";

const supportedLngs = ["ru", "uz", "en"];
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uz",
    lng: "uz",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    resources: resource,
  });

export default i18n;