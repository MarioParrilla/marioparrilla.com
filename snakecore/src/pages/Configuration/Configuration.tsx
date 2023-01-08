import Nav from '../../components/nav/Nav';
import { Feature } from '../../types/feature';
import Menu from '../../components/menu/Menu';
import HiddenMenu from '../../components/hidden-menu/HiddenMenu';

const Configuration = (data: { features: [Feature] }) => {
    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        Configuration
                    </h1>
                    <br />
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <p className='text-xl text-black dark:text-white'>
                            Using configuration files you can configure basic configuration of your application.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Configuration;