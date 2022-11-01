import './buildin.css';
import inBuildGif from './../../assets/in-build.gif';

const Buildin = () => {
    return (
        <>
            <div>
                <img id="gif" src={inBuildGif} alt="in-build"/>
                <p className='text'>Pagina en construccion...</p>
            </div>
        </>
    );
}

export default Buildin;