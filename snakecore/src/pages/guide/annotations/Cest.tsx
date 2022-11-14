import Nav from '../../../components/nav/Nav';
import { Feature } from '../../../types/feature';
import HiddenMenu from '../../../components/hidden-menu/HiddenMenu';
import Menu from '../../../components/menu/Menu';
import ShowCode from '../../../components/show-code/ShowCode';
import CodeExampleService from '../../../shared/services/code-examples/CodeExampleService';
import { Link } from 'react-router-dom';

const Cest = (data: { features: Array<Feature> }) => {
    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        {
                            "@Cest"
                        }
                    </h1>
                    <br />
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%] mb-5'>
                        <p className='text-xl text-black dark:text-white'>
                            Through of this annotation we can say to the Auto configure application, that this class its a Cest and here will recover all or some {<Link to='/guide/annotations/egg' className='font-bold inline hover:text-yellow-600'>Eggs</Link>} of the application.
                        </p>
                        <p className='text-sm font-bold text-black dark:text-white'>Disclaimer: We know that 'cest' in English does not mean basket, but is an original word of this Library.</p>
                        <br />
                        <ShowCode lang='java' title='CestClass.java (in AutoConfig Application)' code={CodeExampleService.getCodeExample({ id: '@eggCest' })} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Cest;