import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <div className='flex flex-col'>
            <img className='mx-auto rounded-full h-48' src={inBuildGif} alt="in-build" />
            <p className='text-center pb-2 text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-black animate-text' >
                Page Under Construction
            </p>
        </div>
    );
}

export default Buildin;