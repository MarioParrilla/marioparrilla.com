import './nav.css'
import mplogo from './../../assets/mplogo.png';

const nav = () => {
    return (
        <div className='nav'>
            <img id='mplogo' src={mplogo} alt="mplogo"/>
        </div>
    );
};

export default nav;