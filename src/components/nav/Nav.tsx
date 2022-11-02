import mplogo from './../../assets/mp_transparente.png';

const changeThemeMode = () => {
    document.body.classList.toggle("dark")
};

const nav = () => {
    return (
        <div className='min-[320px]:hidden md:hidden lg:block h-screen sticky top-0 w-1/10 p-4 border-r-[0.5px] dark:border-zinc-800'>
            <div className='flex flex-col'>
                <a href="/">
                    <img className='w-36' src={mplogo} alt="mplogo"/>
                </a>
                <div className='flex flex-col ml-7'>
                    <a href="/">
                        <button className="w-20 pb-1.5 dark:hover:bg-zinc-700 hover:bg-zinc-400 rounded-full my-5">
                            <svg version="1.1" className="m-auto dark:fill-white fill-black w-8" id="Capa_1" viewBox="0 0 460.298 460.297">
                                <g>
                                    <path d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
                                        c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
                                        c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
                                        z" />
                                </g>
                            </svg>
                        </button>
                    </a>
                    <button className="w-20 pb-1.5 dark:hover:bg-zinc-700 hover:bg-zinc-400 rounded-full my-5" onClick={changeThemeMode}>
                        <svg className='h-7 m-auto dark:fill-white fill-black w-8'>
                            <g>
                                <path
                                    d="M8.2,9.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,9.6   z" />
                                <path d="M7,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3C6.6,17,7,16.6,7,16z" />
                                <path
                                    d="M8.2,22.4l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4   S8.6,22,8.2,22.4z" />
                            </g>
                            <path
                                d="M29.4,16.2c-0.4-0.2-0.9-0.1-1.2,0.3c-0.8,1-2,1.5-3.2,1.5c-2.3,0-4.3-1.9-4.3-4.3c0-1.6,0.9-3,2.3-3.8  c0.4-0.2,0.6-0.7,0.5-1.1C23.4,8.4,23,8,22.5,8c-0.1,0-0.3,0-0.4,0c-1.9,0-3.7,0.7-5.1,1.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v5.1  c-3.9,0.5-7,3.9-7,7.9s3.1,7.4,7,7.9V29c0,0.6,0.4,1,1,1s1-0.4,1-1v-6.8c1.4,1.2,3.2,1.8,5.1,1.8c4,0,7.3-2.9,7.9-6.8  C30.1,16.8,29.8,16.3,29.4,16.2z M17,20c0,0.6-0.4,1-1,1s-1-0.4-1-1v-8c0-0.6,0.4-1,1-1s1,0.4,1,1V20z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default nav;