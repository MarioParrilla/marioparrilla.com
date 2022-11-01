import Footer from '../bottom/Footer';
import Buildin from '../buildIn/Buildin';
import githubLogo from './../../assets/github.svg';
import './content.css';
const Content = () => {
    return (
        <div className='main'>
            <div className='content'>
                <h1>Mario Parrilla</h1>
                <Buildin/>
            </div>
            <Footer/>
        </div>
    );
};

export default Content;