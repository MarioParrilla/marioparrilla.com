import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <div className='flex flex-col'>
            <img className='mx-auto rounded-full' src={inBuildGif} alt="in-build"/>
            <p className='text-center text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-green-400 to-blue-600' animate-text>Pagina en construccion...</p>
        </div>
    );
}

export default Buildin;