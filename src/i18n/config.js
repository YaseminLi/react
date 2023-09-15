import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as _useTranslation,
} from "react-i18next";
import enTranslation from "./translation/en.json";
import cnTranslation from "./translation/cn.json";
import twTranslation from "./translation/tw.json";

const resources = {
  english: {
    translation: enTranslation,
  },
  cn: {
    translation: cnTranslation,
  },
  tw: {
    translation: twTranslation,
  },
};

i18next.use(initReactI18next).init({
  lng: "english",
  resources,
  // debug: true,
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export function useTranslation() {
  return _useTranslation();
}
