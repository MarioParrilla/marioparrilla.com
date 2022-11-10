import Buildin from '../buildIn/Buildin';
import snakecoreIcon from '../../../public/snakecore.svg';
import Social from '../social/Social';
import downArrow from '../../assets/down_arrow.svg';
import { Link } from 'react-router-dom';

const Nav = (data: { title: string }) => {

    return (
        <div className='flex-none w-72 flex-wrap overflow-x-clip border-r overflow-y-scroll h-screen'>
            <div className='my-auto mx-auto'>
                <div className='flex flex-col sticky top-0 bg-white'>
                    <div className='flex flex-row justify-center'>
                        <img className='h-16 m-0' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='my-auto text-center text-xl pb-1 font-bold text-black'>
                            SnakeCore
                        </h1>
                    </div>
                    <div className='flex flex-row'>
                        <p className='pl-4 mr-44 text-lg font-bold text-black'>
                            {data.title}
                        </p>
                        <img className='w-3 mt-1' src={downArrow} alt="downarrow" />
                    </div>
                </div>
                <div className=''>
                    <ul className='list-none mr-2'>
                        <Link to="/"><li className='bg-yellow-300 text-black rounded-tr-xl rounded-br-xl p-2 pl-6'>Home</li></Link>
                    </ul>
                    <Social />
                </div>
            </div>
        </div >
    );

}

export default Nav;