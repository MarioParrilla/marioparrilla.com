import { Route, Routes } from "react-router-dom"
import Guide from "./pages/Guide";
import Home from "./pages/Home"
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import { initTheme } from "./shared/theme/themeService";
import { Section } from "./types/section";

function App() {

  const sectionsHome: Array<Section> = [{ sectionName: 'Welcome', href: '/' }, { sectionName: 'Installation', href: '/installation' }, { sectionName: 'Usage', href: '/usage' }, { sectionName: 'Guide', href: '/guide' }];
  const sectionsInstallation: Array<Section> = [{ sectionName: 'Overview', href: '/installation' }];
  const sectionsUsage: Array<Section> = [{ sectionName: 'Overview', href: '/usage' }, { sectionName: 'Auto configuration', href: '/usage/autoconfig' }, { sectionName: 'Manual configuration', href: '/usage/manualconfig' }];
  const sectionsGuide: Array<Section> = [{ sectionName: 'Overview', href: '/guide' }];

  initTheme()

  return (
    <Routes>
      <Route path='/' element={<Home features={[{ featureTitle: 'Home', sections: sectionsHome, activeSectionName: 'Welcome' }]} />} />
      <Route path='/installation' element={<Installation features={[{ featureTitle: 'Installation', sections: sectionsInstallation, activeSectionName: 'Overview' }]} />} />
      <Route path='/usage' element={<Usage features={[{ featureTitle: 'Usage', sections: sectionsUsage, activeSectionName: 'Overview' }]} />} />
      <Route path='/usage/autoconfig' element={<Usage features={[{ featureTitle: 'Usage', sections: sectionsUsage, activeSectionName: 'Auto configuration' }]} />} />
      <Route path='/usage/manualconfig' element={<Usage features={[{ featureTitle: 'Usage', sections: sectionsUsage, activeSectionName: 'Manual configuration' }]} />} />
      <Route path='/guide' element={<Guide features={[{ featureTitle: 'Guide', sections: sectionsGuide, activeSectionName: 'Overview' }]} />} />
    </Routes>
  )
}

export default App;