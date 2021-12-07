/**
 * @format
 * @flow
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// tips: export each translation to a seperate file
const resources = {
  en: {
    translation: {
      english: 'English',
      APP_NAME: 'FluentU',
      BUTTON_NEUTRAL: 'Ask Me Later',
      BUTTON_NEGATIVE: 'Cancel',
      BUTTON_POSITIVE: 'OK',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
