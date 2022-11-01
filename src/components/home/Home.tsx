import './home.css';
import Nav from '../nav/Nav';
import Content from '../content/Content';
import Section from '../section/Section';

const Home = () => {
    return (
        <div className="main-container">
            <Nav />
            <Content/>
            <Section/>
        </div>
    );
};

export default Home;