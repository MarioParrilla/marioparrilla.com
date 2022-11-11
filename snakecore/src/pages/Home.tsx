import Nav from '../components/nav/Nav';
import snakecoreIcon from '../../public/snakecore.svg';
import { Feature } from '../types/feature';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tag from '../components/tag/Tag';
import Menu from '../components/menu/Menu';
import HiddenMenu from '../components/hidden-menu/HiddenMenu';

const Home = (data: { features: [Feature] }) => {
    const javaExample = `@Cest
public class Cest {

    @Egg
    public Dependency getDependency() {
        return new Dependency();
    }

    @Egg(name = "43uha")
    public String getIdString() {
        return "43uha";
    }

    @Egg(name = "Example")
    public Example getExample() {
        return new Example("Example");
    }
}`;

    const javaExample2 = `public class Dependency {

        @OpenEgg(name = "Example")
        Example example;
    
        public void sayHello() {
            example.sayHello();
        }
    
        @Override
        public String toString() {
            return "Dependency{" +
                    "example=" + example +
                    '}';
        }
    }
    
    `;
    return (
        <div className='flex flex-row'>
            <Nav features={data.features} />
            <HiddenMenu features={data.features} />
            <div className='flex-auto flex flex-col max-h-screen overflow-y-scroll'>
                <Menu />
                <div className='flex flex-col lg:px-20 xl:px-40 max-sm:px-5'>
                    <div className='flex flex-row gap mx-auto'>
                        <img className='h-44 m-0 max-sm:h-20' src={snakecoreIcon} alt="Snake Core Icon" />
                        <h1 className='flex-initial my-auto text-center text-3xl pb-1 font-bold text-black'>
                            SnakeCore
                        </h1>
                        <Tag ttile='0.1.3' />
                    </div>
                    <h1 className='sm:text-4xl md:text-5xl lg:text-6xl text-center pb-2 text-transparent bg-clip-text font-bold bg-gradient-to-r from-black via-yellow-300 to-black animate-text'>
                        SnakeCore an Inversion of control Container Library made to learn.
                    </h1>
                    <div className='flex flex-col flex-wrap justify-center gap-1 m-5'>
                        <div className='max-sm:w-[100%]'>
                            <SyntaxHighlighter customStyle={{ borderRadius: '5px', backgroundColor: 'black' }} language="gradle" style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
                                {javaExample}
                            </SyntaxHighlighter>
                        </div>
                        <div className='max-sm:w-[100%]'>
                            <SyntaxHighlighter customStyle={{ borderRadius: '5px', backgroundColor: 'black' }} language="gradle" style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
                                {javaExample2}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;