import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as English from 'src/locales/en.json'
import * as Bengali from 'src/locales/bn.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English
    },
    bn: {
      translation: Bengali
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
