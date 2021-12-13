import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ru from './resources/ru/locale.json';
import uk from './resources/uk/locale.json';

const detection = {
  order: ['htmlTag'],
  lookupQuerystring: 'lng',
};

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection,
    resources: {
      uk: { translations: uk },
      ru: { translations: ru },
    },
    fallbackLng: 'uk',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    nsSeparator: ':::',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
