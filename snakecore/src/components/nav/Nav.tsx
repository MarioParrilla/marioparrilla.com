import snakecoreIcon from '../../../public/snakecore.svg';
import Social from '../social/Social';
import { Link } from 'react-router-dom';
import { Feature } from '../../types/feature';
import Tag from '../tag/Tag';

const Nav = (data: { features: [Feature] }) => {

    const changeThemeMode = () => {
        document.body.classList.toggle("dark")
        document.body.classList.contains('dark')
            ? localStorage.setItem("theme", 'dark')
            : localStorage.setItem("theme", 'ligth');
    };

    const moon = <svg className="h-7 m-auto dark:fill-white fill-black w-8"><g><path d="M8.2,9.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,9.6   z"></path><path d="M7,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3C6.6,17,7,16.6,7,16z"></path><path d="M8.2,22.4l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4   S8.6,22,8.2,22.4z"></path></g><path d="M29.4,16.2c-0.4-0.2-0.9-0.1-1.2,0.3c-0.8,1-2,1.5-3.2,1.5c-2.3,0-4.3-1.9-4.3-4.3c0-1.6,0.9-3,2.3-3.8  c0.4-0.2,0.6-0.7,0.5-1.1C23.4,8.4,23,8,22.5,8c-0.1,0-0.3,0-0.4,0c-1.9,0-3.7,0.7-5.1,1.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v5.1  c-3.9,0.5-7,3.9-7,7.9s3.1,7.4,7,7.9V29c0,0.6,0.4,1,1,1s1-0.4,1-1v-6.8c1.4,1.2,3.2,1.8,5.1,1.8c4,0,7.3-2.9,7.9-6.8  C30.1,16.8,29.8,16.3,29.4,16.2z M17,20c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8c0-0.6,0.4-1,1-1s1,0.4,1,1V20z"></path></svg>;
    const arrow = <svg className="fill-black dark:fill-white mt-1.5" width="20" height="20">
        <g transform="translate(-446 -398)">
            <path d=" M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272
        93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039
        99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728
        105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961
        103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)">
            </path>
        </g>
    </svg >

    return (
        <div className='flex-none w-72 max-lg:hidden xl:block flex-wrap overflow-x-clip overflow-y-scroll h-screen bg-white dark:bg-zinc-900'>
            <div className='my-auto mx-auto'>
                <div className='flex flex-col sticky top-0 bg-white dark:bg-zinc-900'>

                    <div className='flex flex-row justify-center'>
                        <Link to='/' className='flex flex-row justify-center'>
                            <img className='h-16 m-0' src={snakecoreIcon} alt="Snake Core Icon" />
                            <h1 className='my-auto text-center text-xl pb-1 font-bold text-black dark:text-white'>
                                SnakeCore
                            </h1>
                            <Tag ttile='0.1.3' />
                        </Link>
                        <button className="ml-2 w-10 pb-1.5 dark:hover:bg-zinc-700 hover:bg-zinc-400 rounded-full my-5" onClick={changeThemeMode}>
                            {moon}
                        </button>
                    </div>
                </div>
                {data.features.map(f => {
                    return (
                        <>
                            <div className='flex flex-row'>
                                <p className='pl-4 text-lg font-bold text-black dark:text-white'>
                                    {f.featureTitle}
                                </p>
                                {arrow}
                            </div><div className=''>
                                <ul key={f.featureTitle} className='list-none mr-2'>
                                    {f.sections.map(s => {
                                        return (
                                            s.sectionName === f.activeSectionName
                                                ? <Link to={s.href}><li key={s.sectionName} className='bg-yellow-300 text-black font-bold rounded-tr-xl rounded-br-xl p-2 pl-6'>{s.sectionName}</li></Link>
                                                : <Link to={s.href}><li key={s.sectionName} className='text-black dark:text-white rounded-tr-xl font-bold rounded-br-xl p-2 pl-6 hover:bg-slate-100 dark:hover:bg-zinc-800'>{s.sectionName}</li></Link>
                                        );
                                    })}
                                </ul>
                                {
                                    f.featureTitle !== 'Home'
                                        ? <Link to={"/"}>
                                            <button className='dark:bg-white dark:text-black hover:bg-yellow-300 dark:hover:bg-yellow-300 bg-black text-white hover:text-black rounded-tr-xl rounded-br-xl p-2 font-bold'>
                                                Back to Home
                                            </button>
                                        </Link>
                                        : null
                                }
                                <Social />
                            </div>
                        </>
                    );
                })}
            </div>
        </div >
    );

}

export default Nav;