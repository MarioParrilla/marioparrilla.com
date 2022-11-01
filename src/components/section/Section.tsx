import './section.css';
import githubLogo from './../../assets/github.svg';
import linkedinLogo from './../../assets/linkedin.svg';

const Section = () => {
    return (
        <div className="section">
            <br />
            <a href="mailto:marioparrilla2@gmail.com">
                <button className='contactButton'>
                    Contact me
                </button>
            </a>
            <div className='social-media-container'>
                    <a className='social-media' href='https://github.com/MarioParrilla' target="_blank" ><img className='logo-social-media' src={githubLogo}/></a>
                    <a className='social-media' href='https://www.linkedin.com/in/marioparrillamaroto/' target="_blank" ><img className='logo-social-media' src={linkedinLogo}/></a>
            </div>
        </div>
    );
};

export default Section;