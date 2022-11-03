import { getTranslation } from "../../shared/lang/langService";

const Footer = () => {
    return (
        <div className='dark:bg-zinc-800 bg-gray-200 mt-8 p-4 mb-24'>
            <div className='dark:text-white text-black'>
                {getTranslation('copyrigth')}
            </div>
        </div>
    );
};

export default Footer;