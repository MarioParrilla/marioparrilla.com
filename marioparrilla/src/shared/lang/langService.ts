import { lang } from "../types/lang";
import { Translations } from "./tranlations";

export let currentLang: lang;

export const initLang = (): void => {
  currentLang = Translations[getCurrentLang()];
};

export const getCurrentLang = (): string => {
  let lang = localStorage.getItem("lang");
  if (lang === null) {
    lang = getLangSO() !== null ? getLangSO() : 'null';
    localStorage.setItem("lang", lang);
  }
  return lang.substring(0, 2);
};

const getLangSO = (): string => {
  return navigator.languages[0];
};

export const getTranslation = (key: string) => {
  if (currentLang === null || currentLang === undefined) return 'null';
  return currentLang[key] !== undefined ? currentLang[key] : 'null';
};

export const changeCurrentLang = (location: Location): void => {
  const lang = currentLang.lang == 'es' ? 'en' : 'es';
  localStorage.setItem("lang", lang);
  location.reload();
};