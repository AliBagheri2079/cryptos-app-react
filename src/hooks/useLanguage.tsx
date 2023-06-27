import { useTranslation } from 'react-i18next';

import { type Language } from '@/global/types/other/Language';

type ToggleLanguageType = (value?: Language) => void;

const useLanguage = (): [string, ToggleLanguageType] => {
  const { i18n } = useTranslation();
  const defaultLanguage: string = i18n.language;

  const toggleLanguage: ToggleLanguageType = value => {
    const lang = value ?? (defaultLanguage === 'en' ? 'fa' : 'en');

    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return [defaultLanguage, toggleLanguage];
};

export default useLanguage;
