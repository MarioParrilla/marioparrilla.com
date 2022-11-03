import Footer from '../footer/Footer';
import Buildin from '../buildIn/Buildin';
import mplogo from './../../assets/mp_transparente.png';
import profile from './../../assets/profile.png';
import { getTranslation } from './../../services/LangService'

const Content = () => {
    return (
        <div className='flex-auto w-50% min-h-screen'>
            <div className='my-10 mx-20'>
                <div className='flex flex-col'>
                    <a className='md:block lg:hidden' href="/">
                        <img className='w-12' src={mplogo} alt="mplogo" />
                    </a>
                    <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text'>Mario Parrilla</h1>
                </div>
                <div className='flex flex-row  rounded-2xl border mb-5 bg-white'>
                    <img className='h-52 rounded-tl-2xl rounded-bl-2xl' src={profile} alt="marioPhoto" />
                    <div className=' m-4 text-ellipsis overflow-scroll'>
                        <h1 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 animate-text'>Software Developer</h1>
                        <p>
                            {getTranslation('description')}
                        </p>
                    </div>
                </div>
                <Buildin />
            </div>
            <Footer />
        </div>
    );
};

export default Content;