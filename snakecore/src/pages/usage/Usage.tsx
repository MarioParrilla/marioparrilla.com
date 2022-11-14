import Nav from '../../components/nav/Nav';
import { Feature } from '../../types/feature';
import Menu from '../../components/menu/Menu';
import HiddenMenu from '../../components/hidden-menu/HiddenMenu';
import Buildin from '../../components/buildIn/Buildin';
import { Link } from 'react-router-dom';

const Usage = (data: { features: [Feature] }) => {
    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        Usage
                    </h1>
                    <br />
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <p className='text-xl text-black dark:text-white'>
                            In SnakeCore we have two ways to setup our context: {<Link to='/usage/manualconfig' className='font-bold inline hover:text-yellow-600'>Manual Configuration</Link>} or {<Link to='/usage/autoconfig' className='font-bold inline hover:text-yellow-600'>Auto Configuration</Link>}.
                            <br />
                            Personally I recommend use Auto configuration because with it you can use the manual features too.
                            <br />
                            If you are looking for know what does each of the differents features o functions of Snakecore, you can take a look to our <Link to='/guide' className='font-bold inline hover:text-yellow-600'>Guide</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Usage;