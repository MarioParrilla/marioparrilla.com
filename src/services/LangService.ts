import Translations from "../shared/lang/Translations";

export const currentLang = (): string => {
    let lang = localStorage.getItem("lang");
    if (lang === null) {
        lang = getLangSO();
        localStorage.setItem("lang", lang);
    }
    return lang;
};

const getLangSO = () => {
    return navigator.languages[0];
};

export const getTranslation = (key: string) => {
    return Translations[currentLang()][key];
};

export const changeCurrentLang = (location: Location) => {
    currentLang() === "es"
        ? localStorage.setItem("lang", "en")
        : localStorage.setItem("lang", "es");
    location.reload();
};
