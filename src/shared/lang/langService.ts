import { Translations } from "./tranlations";

export const currentLang = (): string => {
    let lang = localStorage.getItem("lang");
    if (lang === null) {
      lang = getLangSO() !== null ? getLangSO() : 'null';
      localStorage.setItem("lang", lang);
    }
    return lang.substring(0, 2);
  };
  
  const getLangSO = () => {
    return navigator.languages[0];
  };
  
  export const getTranslation = (key: string) => {
    if (Translations[currentLang()] == null) return 'null';
    return Translations[currentLang()][key] !== undefined ? Translations[currentLang()][key] : 'null';
  };
  
  export const changeCurrentLang = (location: Location) => {
    currentLang() === "es"
      ? localStorage.setItem("lang", "en")
      : localStorage.setItem("lang", "es");
    location.reload();
  };