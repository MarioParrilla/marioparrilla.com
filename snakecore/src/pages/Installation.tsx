import Nav from '../components/nav/Nav';
import { Feature } from '../types/feature';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HiddenMenu from '../components/hidden-menu/HiddenMenu';
import Menu from '../components/menu/Menu';

const Installation = (data: { features: [Feature] }) => {
    const currentVersion = '0.1.3';

    const maven = `<dependency>
    <groupId>io.github.marioparrilla</groupId>
    <artifactId>snake-core</artifactId>
    <version>${currentVersion}</version>
</dependency>`;

    const gradle = `implementation 'io.github.marioparrilla:snake-core:${currentVersion}'`;

    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        Installation
                    </h1>
                    <h1 className='my-auto text-3xl pb-1 font-bold text-black dark:text-white'>
                        Maven
                    </h1>
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <SyntaxHighlighter customStyle={{ borderRadius: '5px', backgroundColor: 'black' }} language="xml" style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
                            {maven}
                        </SyntaxHighlighter>
                    </div>
                    <br />
                    <h1 className='my-auto text-3xl pb-1 font-bold text-black dark:text-white'>
                        Gradle
                    </h1>
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <SyntaxHighlighter customStyle={{ borderRadius: '5px', backgroundColor: 'black' }} language="gradle" style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
                            {gradle}
                        </SyntaxHighlighter>
                    </div>
                    <br />
                    <h3 className='text-yellow-300 hover:text-black bg-black hover:bg-yellow-300 text-sm pb-1 font-bold w-44 text-center pt-1 rounded-[5px]'>
                        <a href="https://central.sonatype.dev/artifact/io.github.marioparrilla/snake-core/0.1.3" target="_blank">
                            Go to Maven Central
                        </a>
                    </h3>
                </div>
            </div>
        </div >
    );
}

export default Installation;