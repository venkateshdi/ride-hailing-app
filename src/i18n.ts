import * as i18n from 'i18next';
import * as en from './translations/en.json';
import * as ro from './translations/ro.json';


i18n
  .init({
    lng: 'en' || 'ro',
    fallbackLng: 'en',
    appendNamespaceToCIMode: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    resources: {
      en: {
        translations: en
      },
      ro: {
        translations: ro
      },
    },

    react: {
      wait: true
    }
  });


export default i18n;