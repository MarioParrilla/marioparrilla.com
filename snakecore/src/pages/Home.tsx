import Buildin from '../components/buildIn/Buildin';
import Nav from '../components/nav/Nav';
import snakecoreIcon from '../../public/snakecore.svg';

const Home = () => {
    return (
        <div className='flex flex-row'>
            <Nav title='Inicio' />
            <div className='flex-auto max-h-screen overflow-y-scroll'>
                <div className='flex flex-col'>
                    <div className='flex flex-row px-44'>
                        <img className='h-44 m-0' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='my-auto text-center text-3xl pb-1 font-bold text-black'>
                            SnakeCore
                        </h1>
                    </div>
                    <Buildin />
                </div>
            </div>
        </div>
    );
}

export default Home;