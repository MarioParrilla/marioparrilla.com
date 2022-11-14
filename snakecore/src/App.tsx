import AppRoutes from "./components/routes/AppRoutes";
import init from "./shared/services/config/ConfigService";

function App() {
  init();
  return (
    <AppRoutes />
  )
}

export default App;