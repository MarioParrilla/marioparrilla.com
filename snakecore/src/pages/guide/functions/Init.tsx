import Nav from '../../../components/nav/Nav';
import { Feature } from '../../../types/feature';
import HiddenMenu from '../../../components/hidden-menu/HiddenMenu';
import Menu from '../../../components/menu/Menu';
import ShowCode from '../../../components/show-code/ShowCode';
import CodeExampleService from '../../../shared/services/code-examples/CodeExampleService';

const Init = (data: { features: Array<Feature> }) => {
    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        {
                            "init()"
                        }
                    </h1>
                    <br />
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <p className='text-xl text-black dark:text-white'>
                            This function is like the factory of the SnakeApplication. In this function you need to put the main class of the application.
                        </p>
                        <br />
                        <ShowCode lang='java' title='Main.java' code={CodeExampleService.getCodeExample({ id: 'init()' })} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Init;