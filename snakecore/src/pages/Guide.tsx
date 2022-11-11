import Nav from '../components/nav/Nav';
import { Feature } from '../types/feature';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HiddenMenu from '../components/hidden-menu/HiddenMenu';
import Menu from '../components/menu/Menu';
import Buildin from '../components/buildIn/Buildin';

const Guide = (data: { features: [Feature] }) => {
    return (
        <div className='flex flex-row'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black via-yellow-300 to-black animate-text'>
                        Guide
                    </h1>
                    <br />
                    <Buildin />
                    {/* <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <SyntaxHighlighter customStyle={{ borderRadius: '5px', backgroundColor: 'black' }} language="gradle" style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
                            {'test'}
                        </SyntaxHighlighter>
                    </div> */}
                </div>
            </div>
        </div >
    );
}

export default Guide;