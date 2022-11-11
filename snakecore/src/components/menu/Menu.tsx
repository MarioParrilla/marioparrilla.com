import { Link } from "react-router-dom";
import Tag from "../tag/Tag";
import snakecoreIcon from '../../../public/snakecore.svg';

const Menu = () => {
    const hamburger = <svg className='my-auto ml-5 w-6' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

    const openMenu = () => {
        const menuElement = document.getElementById('openMenu');
        if (menuElement!.classList.contains('hiddenMenu')) {
            menuElement!.classList.remove('hiddenMenu');
            menuElement!.classList.add('showMenu');
        } else {
            menuElement!.classList.remove('showMenu');
            menuElement!.classList.add('hiddenMenu');
        }
    }

    return (
        <div className='min-[1050]:block lg:hidden sticky top-0 bg-white'>
            <div className='flex flex-col sticky top-0 bg-white'>
                <div className='flex flex-row'>
                    <button onClick={openMenu}>
                        {hamburger}
                    </button>
                    <Link to='/' className='flex flex-row'>
                        <img className='h-16 m-0' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='my-auto text-center text-xl pb-1 font-bold text-black'>
                            SnakeCore
                        </h1>
                        <Tag ttile='0.1.3' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;