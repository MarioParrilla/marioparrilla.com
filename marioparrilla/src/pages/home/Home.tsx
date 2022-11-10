import Nav from '../../components/nav/Nav';
import Content from '../../components/content/Content';
import Section from '../../components/section/Section';
import BottomBar from '../../components/bottomBar/BottomBar';

const Home = () => {
    return (
        <div>
            <div className="flex flex-row h-screen font-sans dark:bg-zinc-900">
                <Nav />
                <Content />
                <Section />
            </div>
            <BottomBar />
        </div>
    );
};

export default Home;