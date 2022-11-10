import Home from './pages/home/Home';
import { initLang } from './shared/lang/langService';
import { defTheme as initTheme } from './shared/theme/themeService';

function App() {
  initTheme();
  initLang();
  return (
    <Home />
  );
}

export default App;
