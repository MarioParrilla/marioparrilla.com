import { getTranslation } from "../../shared/lang/langService";
import profile from './../../assets/profile.png';

const PersonalCard = () => {
    return (
        <div className='flex flex-row rounded-2xl border mb-5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white bg-white max-w-7xl'>
            <img className='h-52 rounded-tl-2xl rounded-bl-2xl' src={profile} alt="marioPhoto" />
            <div className=' m-4 overflow-clip'>
                <h1 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-amber-500 animate-text'>Software Developer</h1>
                <p>
                    {getTranslation('description')}
                </p>
            </div>
        </div>
    );
};

export default PersonalCard;