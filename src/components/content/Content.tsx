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
                    {getTranslation('skillsTitle')}
                </h1>
                <div className='mx-auto'>
                    <div className='flex flex-row flex-wrap space-x-4'>

                        <div></div>
                        <ImageCard icon={javaIcon} alt="java" />
                        <ImageCard icon={springIcon} alt="spring" />
                        <ImageCard icon={jsIcon} alt="javascript" />
                        <ImageCard icon={tsIcon} alt="typescript" />
                        <ImageCard icon={pyIcon} alt="python" />
                        <ImageCard icon={mysqlIcon} alt="mysql" />
                    </div>
                </div>
                <Buildin />
            </div>
            <Footer />
        </div>
    );
};

export default Content;