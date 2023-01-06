import Nav from '../components/nav/Nav';
import { Feature } from '../types/feature';
import HiddenMenu from '../components/hidden-menu/HiddenMenu';
import Menu from '../components/menu/Menu';
import ShowCode from '../components/show-code/ShowCode';
import CodeExampleService from '../shared/services/code-examples/CodeExampleService';
import { currentVersion } from '../shared/services/config/ConfigService';

const Installation = (data: { features: [Feature] }) => {

    return (
        <div className='flex flex-row h-screen bg-white dark:bg-zinc-900'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll bg-white dark:bg-zinc-900'>
                <Menu />
                <div className='flex flex-col md:px-20 lg:px-20 xl:px-40 sm:px-5 max-sm:px-5'>
                    <h1 className='pt-5 pb-5 sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-black dark:from-white via-yellow-300 dark:via-yellow-300 to-black dark:to-white animate-text'>
                        Installation
                    </h1>
                    <h1 className='my-auto text-3xl pb-1 font-bold text-black dark:text-white'>
                        Maven
                    </h1>
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <ShowCode lang='xml' title='pom.xml' code={CodeExampleService.getCodeExample({ id: 'maven' })} />
                    </div>
                    <br />
                    <h1 className='my-auto text-3xl pb-1 font-bold text-black dark:text-white'>
                        Gradle
                    </h1>
                    <div className='w-[50%] sm:w-[100%] max-sm:w-[100%]'>
                        <ShowCode lang='gradle' title='build.gradle' code={CodeExampleService.getCodeExample({ id: 'gradle' })} />
                    </div>
                    <br />
                    <h3 className='text-yellow-300 hover:text-black bg-black hover:bg-yellow-300 text-sm pb-1 font-bold w-44 text-center pt-1 rounded-[5px]'>
                        <a href={"https://central.sonatype.dev/artifact/io.github.marioparrilla/snake-core/" + { currentVersion }} target="_blank">
                            Go to Maven Central
                        </a>
                    </h3>
                </div>
            </div>
        </div >
    );
}

export default Installation;