import { Link } from "react-router-dom";
import Tag from "../tag/Tag";
import snakecoreIcon from '../../../public/snakecore.svg';

const Menu = () => {
    const hamburger = <svg className='my-auto ml-5 w-6 dark:stroke-white' viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    const moon = <svg className="h-7 m-auto dark:fill-white fill-black w-8"><g><path d="M8.2,9.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,9.6   z"></path><path d="M7,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3C6.6,17,7,16.6,7,16z"></path><path d="M8.2,22.4l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4   S8.6,22,8.2,22.4z"></path></g><path d="M29.4,16.2c-0.4-0.2-0.9-0.1-1.2,0.3c-0.8,1-2,1.5-3.2,1.5c-2.3,0-4.3-1.9-4.3-4.3c0-1.6,0.9-3,2.3-3.8  c0.4-0.2,0.6-0.7,0.5-1.1C23.4,8.4,23,8,22.5,8c-0.1,0-0.3,0-0.4,0c-1.9,0-3.7,0.7-5.1,1.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v5.1  c-3.9,0.5-7,3.9-7,7.9s3.1,7.4,7,7.9V29c0,0.6,0.4,1,1,1s1-0.4,1-1v-6.8c1.4,1.2,3.2,1.8,5.1,1.8c4,0,7.3-2.9,7.9-6.8  C30.1,16.8,29.8,16.3,29.4,16.2z M17,20c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8c0-0.6,0.4-1,1-1s1,0.4,1,1V20z"></path></svg>;

    const changeThemeMode = () => {
        document.body.classList.toggle("dark")
        document.body.classList.contains('dark')
            ? localStorage.setItem("theme", 'dark')
            : localStorage.setItem("theme", 'ligth');
    };

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
        <div className='min-[1050]:block lg:hidden sticky top-0 bg-white dark:bg-zinc-900 border-b-[0.5px] border-gray-300 dark:border-black z-20'>
            <div className='flex flex-col sticky top-0 bg-white dark:bg-zinc-900 z-20'>
                <div className='flex flex-row'>
                    <button onClick={openMenu}>
                        {hamburger}
                    </button>
                    <Link to='/' className='flex flex-row'>
                        <img className='h-16 m-0' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='my-auto text-center text-xl pb-1 font-bold text-black dark:text-white'>
                            SnakeCore
                        </h1>
                        <Tag ttile='0.1.3' />
                        <button className="ml-2 w-10  dark:hover:bg-zinc-700 hover:bg-zinc-400 rounded-full my-5" onClick={changeThemeMode}>
                            {moon}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;