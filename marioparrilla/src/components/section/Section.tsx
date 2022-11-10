import { getTranslation } from "../../shared/lang/langService";
import GithubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";

const Section = () => {
    return (
        <div className='min-[320px]:hidden min-[880px]:block h-screen sticky top-0 flex-none w-1/6 flex flex-col p-4 border-l-[0.5px] dark:border-zinc-800 text-center items-center'>
            <div className="mt-10">
                <a href="mailto:marioparrilla2@gmail.com">
                    <button className='dark:bg-white hover:shadow-xl shadow-lg dark:shadow-zinc-700 md:w-32 xl:w-48 dark:text-black dark:hover:bg-green-300 hover:bg-green-300 bg-black text-white rounded-full p-2 font-bold'>
                        {getTranslation('contactMe')}
                    </button>
                </a>
                <div className='flex flex-row justify-center mt-2'>
                    <a className='dark:fill-white m-2 hover:bg-green-300 rounded-full' href='https://github.com/MarioParrilla' target="_blank" >
                        <GithubIcon size="w-12" />
                    </a>
                    <a className='dark:fill-white m-2 hover:bg-green-300 rounded-full' href='https://www.linkedin.com/in/marioparrillamaroto/' target="_blank" >
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section;