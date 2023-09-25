import { useTranslation } from 'react-i18next';

import type { Language, ToggleLanguage } from '@/types/utility';

const useLanguage = (): [Language, ToggleLanguage] => {
  const { i18n } = useTranslation();
  const language = i18n.language as Language;

  const toggleLanguage: ToggleLanguage = value => {
    const lang = value ?? (language === 'en' ? 'fa' : 'en');
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return [language, toggleLanguage];
};

export { useLanguage };
