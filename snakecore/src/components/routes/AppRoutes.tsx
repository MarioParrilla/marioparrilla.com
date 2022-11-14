import AutoConfig from "../../pages/usage/AutoConfig";
import { Route, Routes } from "react-router-dom"
import Guide from "../../pages/guide/Guide";
import Home from "../../pages/Home"
import Installation from "../../pages/Installation";
import ManualConfig from "../../pages/usage/ManualConfig";
import Usage from "../../pages/usage/Usage";
import SectionService from "../../shared/services/sections/SectionService";
import Init from "../../pages/guide/functions/Init";
import Run from "../../pages/guide/functions/Run";
import RegisterCests from "../../pages/guide/functions/RegisterCests";
import ClassesToScan from "../../pages/guide/functions/ClassesToScan";
import EnableTrace from "../../pages/guide/functions/EnableTrace";
import GetAllEggs from "../../pages/guide/functions/GetAllEggs";
import GetEgg from "../../pages/guide/functions/GetEgg";
import ContainEgg from "../../pages/guide/functions/ContainEgg";
import Egg from "../../pages/guide/annotations/Egg";
import OpenEgg from "../../pages/guide/annotations/OpenEgg";
import Cest from "../../pages/guide/annotations/Cest";
import AutoConfigAnnotation from "../../pages/guide/annotations/AutoConfig";
import CustomConstructor from "../../pages/guide/annotations/CustomConstructor";
import CustomParam from "../../pages/guide/annotations/CustomParam";

const AppRoutes = () => {
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
                <Init features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'init()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/run' element={
                <Run features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'run()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/registercesteggsclass' element={
                <RegisterCests features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'registerCestEggsClass()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/classestoscan' element={
                <ClassesToScan features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'classesToScan()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/enabletrace' element={
                <EnableTrace features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'enableTrace()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/getalleggs' element={
                <GetAllEggs features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'getAllEggs()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/getegg' element={
                <GetEgg features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'getEgg()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/functions/containsegg' element={
                <ContainEgg features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: 'containsEgg()' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '' }
                ]} />}
            />
            <Route path='/guide/annotations/egg' element={
                <Egg features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@Egg' }
                ]} />}
            />
            <Route path='/guide/annotations/openegg' element={
                <OpenEgg features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@OpenEgg' }
                ]} />}
            />
            <Route path='/guide/annotations/cest' element={
                <Cest features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@Cest' }
                ]} />}
            />
            <Route path='/guide/annotations/autoconfig' element={
                <AutoConfigAnnotation features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@AutoConfig' }
                ]} />}
            />
            <Route path='/guide/annotations/customconstructor' element={
                <CustomConstructor features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@CustomConstructor' }
                ]} />}
            />
            <Route path='/guide/annotations/customparam' element={
                <CustomParam features={[
                    { featureTitle: 'Guide', sections: SectionService.getSection({ id: 'guide' }), activeSectionName: '' },
                    { featureTitle: 'Functions', sections: SectionService.getSection({ id: 'functions' }), activeSectionName: '' },
                    { featureTitle: 'Annotations', sections: SectionService.getSection({ id: 'annotations' }), activeSectionName: '@CustomParam' }
                ]} />}
            />
        </Routes>
    );
}

export default AppRoutes;