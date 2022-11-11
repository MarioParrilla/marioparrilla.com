import GithubIcon from '../../components/icons/Github'
import LinkedinIcon from '../../components/icons/Linkedin'

const Social = () => {
    return (
        <div className='flex flex-col p-4 text-center items-center'>
            <div className="mt-10">
                <a href="mailto:marioparrilla2@gmail.com">
                    <button className='dark:bg-white md:w-32 xl:w-48 dark:text-black dark:hover:bg-green-300 hover:bg-yellow-300 bg-black text-white hover:text-black rounded-full p-2 font-bold'>
                        Contact me
                    </button>
                </a>
                <div className='flex flex-row justify-center mt-2'>
                    <a className='dark:fill-white m-2 hover:bg-yellow-300 rounded-full' href='https://github.com/MarioParrilla/snakecore' target="_blank" >
                        <GithubIcon size="w-12" />
                    </a>
                    <a className='dark:fill-white m-2 hover:bg-yellow-300 rounded-full' href='https://www.linkedin.com/in/marioparrillamaroto/' target="_blank" >
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Social;