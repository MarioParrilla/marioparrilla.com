import CodeExampleService from "../code-examples/CodeExampleService";
import SectionService from "../sections/SectionService";
import { initTheme } from "../theme/ThemeService";

export const currentVersion = '0.1.3';

const init = () => {

    initTheme();
    initSections();
    initCodeExamples();

}

const initSections = () => {
    SectionService.addSection({ id: 'home', section: [{ sectionName: 'Welcome', href: '/' }, { sectionName: 'Installation', href: '/installation' }, { sectionName: 'Usage', href: '/usage' }, { sectionName: 'Guide', href: '/guide' }] });
    SectionService.addSection({ id: 'installation', section: [{ sectionName: 'Overview', href: '/installation' }] });
    SectionService.addSection({ id: 'usage', section: [{ sectionName: 'Overview', href: '/usage' }, { sectionName: 'Auto configuration', href: '/usage/autoconfig' }, { sectionName: 'Manual configuration', href: '/usage/manualconfig' }] });
    SectionService.addSection({ id: 'guide', section: [{ sectionName: 'Overview', href: '/guide' }] });
}

const initCodeExamples = () => {
    CodeExampleService.addCodeExample({
        id: 'javaHome1', example: `@Cest
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
}`
    });

    CodeExampleService.addCodeExample({
        id: 'javaHome2', example: `public class Dependency {
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
}`
    });

    CodeExampleService.addCodeExample({
        id: 'maven', example: `<dependency>
    <groupId>io.github.marioparrilla</groupId>
    <artifactId>snake-core</artifactId>
    <version>${currentVersion}</version>
</dependency>`
    });

    CodeExampleService.addCodeExample({
        id: 'gradle', example: `implementation 'io.github.marioparrilla:snake-core:${currentVersion}'`
    });


    CodeExampleService.addCodeExample({
        id: 'showInitManualConfig', example: `public class Main {
    public static void main(String[] args) throws Exception {
        ApplicationContext context = SnakeApplication
                .init(Main.class)
                .registerCestEggsClass(new Class[] {Cest.class})
                .classesToScan(new Class[] {Car.class, Engine.class, Wheels.class})
                .run();
    }
}`
    });
}

export default init;