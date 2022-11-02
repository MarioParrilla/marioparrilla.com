import Nav from '../nav/Nav';
import Content from '../content/Content';
import Section from '../section/Section';
import BottomBar from '../bottomBar/BottomBar';

const Home = () => {
    return (
        <div>
            <div className="flex flex-row min-h-screen font-sans dark:bg-zinc-900">
                <Nav/>
                <Content/>
                <Section/>
            </div>
            <BottomBar/>
        </div>
    );
};

export default Home;