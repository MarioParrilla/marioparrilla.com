export const initTheme = () => {
    let theme = localStorage.getItem("theme");
    if (theme === null) {
        theme = getThemeSO();
        localStorage.setItem("theme", theme);
    }
    if (theme === 'dark') document.body.classList.add("dark")
};

export const getThemeSO = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? 'dark'
        : 'ligth';
};