import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn  from "./locales/en.json";
import translationTn from "./locales/tn.json";
const resources ={
    en:{
        translation:translationEn
    },
    tn:{
        translation:translationTn
    }
};
i18n
.use(initReactI18next)
.init({
    resources,
    lng:'en',
    keySeparator:false,
    interpolation:{
        escapeValue:false
    }
});
export default i18n;