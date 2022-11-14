import Nav from '../../components/nav/Nav';
import { Feature } from '../../types/feature';
import HiddenMenu from '../../components/hidden-menu/HiddenMenu';
import Menu from '../../components/menu/Menu';
import ShowCode, { TabShowCode } from '../../components/show-code/ShowCode';
import CodeExampleService from '../../shared/services/code-examples/CodeExampleService';

const ManualConfig = (data: { features: [Feature] }) => {

    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        Manual configuration
                    </h1>
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%] mb-5'>
                        <TabShowCode tabs={[
                            { lang: 'java', title: 'Main.java', code: CodeExampleService.getCodeExample({ id: 'showMainManualConfig' }) },
                            { lang: 'java', title: 'Cest.java', code: CodeExampleService.getCodeExample({ id: 'showCestManualConfig' }) },
                            { lang: 'java', title: 'Car.java', code: CodeExampleService.getCodeExample({ id: 'showCarManualConfig' }) },
                            { lang: 'java', title: 'Engine.java', code: CodeExampleService.getCodeExample({ id: 'showEngineManualConfig' }) },
                            { lang: 'java', title: 'Wheel.java', code: CodeExampleService.getCodeExample({ id: 'showWheelManualConfig' }) },
                        ]} />
                        <br />
                        <ShowCode lang='java' title='Output' code={CodeExampleService.getCodeExample({ id: 'showInitOutputManualConfig' })} showLineNumbers={false} wrapLongLine={true} />
                    </div>
                    <br />
                </div>
            </div>
        </div >
    );
}

export default ManualConfig;