import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { resources } from './data';

i18n
  //* detect user language
  .use(LanguageDetector)
  //* pass the i18n instance to react-i18next.
  .use(initReactI18next)
  //* init i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      //* react already safes from xss
      escapeValue: false,
    },

    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    },
  });

export default i18n;
