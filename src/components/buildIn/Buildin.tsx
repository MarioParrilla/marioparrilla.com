import { getTranslation } from "../../shared/lang/langService";
import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <div className='flex flex-col'>
            <img className='mx-auto rounded-full' src={inBuildGif} alt="in-build" />
            <p className='text-center text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-green-400 to-blue-600' animate-text>
                {getTranslation('building')}
            </p>
        </div>
    );
}

export default Buildin;