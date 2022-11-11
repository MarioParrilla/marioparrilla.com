import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <div className='flex flex-col'>
            <img className='mx-auto rounded-full h-72' src={inBuildGif} alt="in-build" />
            <p className='text-center pb-2 text-3xl font-bold text-black dark:text-white' >
                Page Under Construction
            </p>
        </div>
    );
}

export default Buildin;