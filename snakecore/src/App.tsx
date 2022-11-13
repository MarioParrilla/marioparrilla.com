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
      <Route path='/guide' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: 'Overview' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/init' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'init()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/run' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'run()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/registercesteggsclass' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'registerCestEggsClass()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/classestoscan' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'classesToScan()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/enabletrace' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'enableTrace()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/getalleggs' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'getAllEggs()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/getegg' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'getEgg()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/functions/containsegg' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'containsEgg()' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
        ]} />}
      />
      <Route path='/guide/annotations/egg' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@Egg' }
        ]} />}
      />
      <Route path='/guide/annotations/openegg' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@OpenEgg' }
        ]} />}
      />
      <Route path='/guide/annotations/cest' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@Cest' }
        ]} />}
      />
      <Route path='/guide/annotations/autoconfig' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@AutoConfig' }
        ]} />}
      />
      <Route path='/guide/annotations/customconstructor' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@CustomConstructor' }
        ]} />}
      />
      <Route path='/guide/annotations/customparam' element={
        <Guide features={[
          { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
          { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
          { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@CustomParam' }
        ]} />}
      />
    </Routes>
  )
}

export default App;