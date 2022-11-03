import Home from './pages/home/Home';

function App() {

  const defTheme = () => {
    let theme = localStorage.getItem("theme");
    if (theme === null) {
      theme = getThemeSO();
      localStorage.setItem("theme", theme);
    }
    if (theme === 'dark') document.body.classList.add("dark")
  };

  const getThemeSO = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? 'dark'
      : 'ligth';
  };

  defTheme();

  return (
    <Home />
  );
}

export default App;
