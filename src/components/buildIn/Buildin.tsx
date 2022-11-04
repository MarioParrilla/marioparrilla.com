import { getTranslation } from "../../shared/lang/langService";
import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <div className='flex flex-col'>
            <img className='mx-auto rounded-full h-48' src={inBuildGif} alt="in-build" />
            <p className='text-center text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-400 to-purple-700' animate-text>
                {getTranslation('building')}
            </p>
        </div>
    );
}

export default Buildin;