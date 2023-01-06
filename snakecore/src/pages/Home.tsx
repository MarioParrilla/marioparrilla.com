import Nav from '../components/nav/Nav';
import snakecoreIcon from '../../public/snakecore.svg';
import { Feature } from '../types/feature';
import Tag from '../components/tag/Tag';
import Menu from '../components/menu/Menu';
import HiddenMenu from '../components/hidden-menu/HiddenMenu';
import ShowCode from '../components/show-code/ShowCode';
import CodeExampleService from '../shared/services/code-examples/CodeExampleService';
import { currentVersion } from '../shared/services/config/ConfigService';

const Home = (data: { features: [Feature] }) => {
    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col lg:px-20 xl:px-40 max-sm:px-5'>
                    <div className='flex flex-row gap mx-auto'>
                        <img className='h-44 m-0 max-sm:h-20' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='flex-initial my-auto text-center text-3xl pb-1 font-bold text-black dark:text-white'>
                            SnakeCore
                        </h1>
                        <Tag ttile={currentVersion} />
                    </div>
                    <h1 className='sm:text-4xl md:text-5xl lg:text-6xl text-center pb-2 text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        SnakeCore an Inversion of control Container Library made to learn.
                    </h1>
                    <div className='flex flex-col flex-wrap justify-center m-5'>
                        <div className='max-sm:w-[100%]'>
                            <ShowCode lang='java' title='Main.java' code={CodeExampleService.getCodeExample({ id: 'showMainAutoConfig' })} />
                        </div>
                        <br />
                        <div className='max-sm:w-[100%]'>
                            <ShowCode lang='java' title='Cest.java' code={CodeExampleService.getCodeExample({ id: 'showCestAutoConfig' })} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;