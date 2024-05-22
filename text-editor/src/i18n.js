// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import he from './locales/he.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            he: {
                translation: he
            }
        },
        lng: 'en', // שפת ברירת מחדל
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    }).then(() => {
    // פעולה כלשהי לאחר אתחול מוצלח
    console.log('i18n initialized');
});

export default i18n;
