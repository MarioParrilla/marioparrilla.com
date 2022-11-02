import Footer from '../footer/Footer';
import Buildin from '../buildIn/Buildin';
import mplogo from './../../assets/mp_transparente.png';

const Content = () => {
    return (
        <div className='flex-auto w-50% min-h-screen'>
            <div className='my-10 mx-20'>
                <div className='flex flex-col'>
                    <a className='md:block lg:hidden' href="/">
                        <img className='w-12' src={mplogo} alt="mplogo"/>
                    </a>
                    <h1 className='mb-5 font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 animate-text'>Mario Parrilla</h1>
                </div>
                <Buildin/>
            </div>
            <Footer/>
        </div>
    );
};

export default Content;