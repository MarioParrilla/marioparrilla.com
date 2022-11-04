import Footer from '../footer/Footer';
import Buildin from '../buildIn/Buildin';
import mplogo from './../../assets/mp_transparente.png';
import PersonalCard from '../personalCard/PersonalCard';
import { getTranslation } from '../../shared/lang/langService';
import ImageCard from '../imageCard/ImageCard';
import javaIcon from './../../assets/java.svg';
import springIcon from './../../assets/spring.svg';
import jsIcon from './../../assets/js.svg';
import tsIcon from './../../assets/ts.svg';
import pyIcon from './../../assets/py.svg';
import mysqlIcon from './../../assets/mysql.svg';
import reactIcon from './../../assets/react.svg';
import csharpIcon from './../../assets/csharp.svg';
import flutterIcon from './../../assets/flutter.svg';
import angularIcon from './../../assets/angular.svg';
import nodejsIcon from './../../assets/node.svg';
import androidIcon from './../../assets/android.svg';
import tailwindIcon from './../../assets/tailwindcss.svg';
import plsqlIcon from './../../assets/plsql.svg';
import jiraIcon from './../../assets/jira.svg';
import unityIcon from './../../assets/unity.svg';
import mavenIcon from './../../assets/maven.svg';
import cssIcon from './../../assets/css.svg';
import structuresIcon from './../../assets/structures.svg';
import algorithmIcon from './../../assets/algorithm.svg';

const Content = () => {
    return (
        <div className='flex-auto w-50% min-h-screen'>
            <div className='my-10 min-[320px]:mx-5 md:mx-20'>
                <div className='flex flex-col'>
                    <a className='md:block lg:hidden' href="/">
                        <img className='w-12' src={mplogo} alt="mplogo" />
                    </a>
                    <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text'>Mario Parrilla</h1>
                </div>
                <PersonalCard />
                <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text pb-1'>
                    {getTranslation('technologiesTitle')}
                </h1>
                <div className='mx-auto'>
                    <div className='flex flex-row flex-wrap space-x-4'>
                        <div></div>
                        <ImageCard title='Java' icon={javaIcon} alt="java" />
                        <ImageCard title='Spring' icon={springIcon} alt="spring" />
                        <ImageCard title='Javascript' icon={jsIcon} alt="javascript" />
                        <ImageCard title='Typecript' icon={tsIcon} alt="typescript" />
                        <ImageCard title='Python' icon={pyIcon} alt="python" />
                        <ImageCard title='MySql' icon={mysqlIcon} alt="mysql" />
                    </div>
                </div>
                <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text pb-1'>
                    {getTranslation('technologies2Title')}
                </h1>
                <div className='mx-auto'>
                    <div className='flex flex-row flex-wrap space-x-4'>
                        <div></div>
                        <ImageCard title='React' icon={reactIcon} alt="react" />
                        <ImageCard title='C#' icon={csharpIcon} alt="csharp" />
                        <ImageCard title='Flutter' icon={flutterIcon} alt="flutter" />
                        <ImageCard title='Angular' icon={angularIcon} alt="angular" />
                        <ImageCard title='NodeJS' icon={nodejsIcon} alt="nodejs" />
                        <ImageCard title='Maven' icon={mavenIcon} alt="maven" />
                        <ImageCard title='Android' icon={androidIcon} alt="android" />
                        <ImageCard title='TailwindCSS' icon={tailwindIcon} alt="tailwindcss" />
                        <ImageCard title='PLSQL' icon={plsqlIcon} alt="plsql" />
                        <ImageCard title='Jira' icon={jiraIcon} alt="jira" />
                        <ImageCard title='Unity' icon={unityIcon} alt="unity" />
                        <ImageCard title='CSS' icon={cssIcon} alt="css" />
                    </div>
                </div>
                <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text pb-1'>
                    {getTranslation('projects')}
                </h1>
                <Buildin />
                <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text pb-1'>
                    {getTranslation('nextIdeas')}
                </h1>
                <div className='flex flex-row flex-wrap space-x-4'>
                    <div></div>
                    <ImageCard title='Data Structures +' icon={structuresIcon} alt="Data structures" />
                    <ImageCard title='Algorithm +' icon={algorithmIcon} alt="Algorithm" />
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Content;