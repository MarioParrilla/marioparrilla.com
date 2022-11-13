import { Route, Routes } from "react-router-dom"
import AutoConfig from "./pages/AutoConfig";
import Guide from "./pages/Guide";
import Home from "./pages/Home"
import Installation from "./pages/Installation";
import ManualConfig from "./pages/ManualConfig";
import Usage from "./pages/Usage";
import init from "./shared/services/config/ConfigService";
import SectionService from "./shared/services/sections/SectionService";

function App() {
  init();
  return (
    <Routes>
      <Route path='/' element={<Home features={[{ featureTitle: 'Home', sections: SectionService.getSection({ id: 'home' }), activeSectionName: 'Welcome' }]} />} />
      <Route path='/installation' element={<Installation features={[{ featureTitle: 'Installation', sections: SectionService.getSection({ id: 'installation' }), activeSectionName: 'Overview' }]} />} />
      <Route path='/usage' element={<Usage features={[{ featureTitle: 'Usage', sections: SectionService.getSection({ id: 'usage' }), activeSectionName: 'Overview' }]} />} />
      <Route path='/usage/autoconfig' element={<AutoConfig features={[{ featureTitle: 'Usage', sections: SectionService.getSection({ id: 'usage' }), activeSectionName: 'Auto configuration' }]} />} />
      <Route path='/usage/manualconfig' element={<ManualConfig features={[{ featureTitle: 'Usage', sections: SectionService.getSection({ id: 'usage' }), activeSectionName: 'Manual configuration' }]} />} />
      <Route path='/guide' element={<Guide features={[{ featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: 'Overview' }]} />} />
    </Routes>
  )
}

export default App;