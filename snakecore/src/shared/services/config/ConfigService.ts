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
        id: 'showMainManualConfig', example: `public class Main {
    @OpenEgg
    static Car car;
    public static void main(String[] args) throws Exception {
        ApplicationContext context = SnakeApplication
                .init(Main.class)
                .registerCestEggsClass(new Class[] {Cest.class})
                .classesToScan(new Class[] {Main.class, Car.class, Engine.class, Wheel.class})
                .run();
        System.out.println(car.toString());
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showCestManualConfig', example: `public class Cest {
    @Egg
    public Wheel getWheel0() {
        return new Wheel();
    }

    @Egg(name = "michelin")
    public Wheel getWheel1() {
        return new Wheel("Michelin");
    }

    @Egg
    public Engine getEngine() {
        return new Engine("Audi");
    }

    @Egg
    public Car getCar() {
        return new Car();
    }

}`
    });

    CodeExampleService.addCodeExample({
        id: 'showCarManualConfig', example: `public class Car {
    @OpenEgg(name = "michelin")
    private Wheel wheel1;

    @OpenEgg
    private Wheel wheel2;

    @OpenEgg(name = "michelin")
    private Wheel wheel3;

    @OpenEgg
    private Wheel wheel4;

    @OpenEgg
    private Engine engine;

    @Override
    public String toString() {
        return "Car{" +
                "wheel1=" + wheel1 +
                ", wheel2=" + wheel2 +
                ", wheel3=" + wheel3 +
                ", wheel4=" + wheel4 +
                ", engine=" + engine +
                '}';
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showEngineManualConfig', example: `public class Engine {
    private String brand;

    public Engine(String brandName) {
        this.brand = brandName;
    }

    public String getBrand() {
        return brand;
    }

    @Override
    public String toString() {
        return "Engine{" +
                "brand='" + brand + '\'' +
                '}';
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showWheelManualConfig', example: `public class Wheel {
    private String brand;

    public Wheel() {
        this.brand = "No Brand";
    }

    public Wheel(String brandName) {
        this.brand = brandName;
    }

    public String getBrand() {
        return brand;
    }

    @Override
    public String toString() {
        return "Wheel{" +
                "brand='" + brand + '\'' +
                '}';
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showInitOutputManualConfig', example: `[main] INFO com.marioparrilla.snake.context.SnakeApplication - Creating the eggs
[main] INFO com.marioparrilla.snake.context.SnakeApplication - All eggs were created
[main] INFO com.marioparrilla.snake.context.SnakeApplication - All eggs were opened
Car{wheel1=Wheel{brand='Michelin'}, wheel2=Wheel{brand='No Brand'}, wheel3=Wheel{brand='Michelin'}, wheel4=Wheel{brand='No Brand'}, engine=Engine{brand='Audi'}}`
    });

    CodeExampleService.addCodeExample({
        id: 'showMainAutoConfig', example: `@AutoConfig
public class Main {
    @OpenEgg
    static Car car;
    public static void main(String[] args) throws Exception {
        ApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
        System.out.println(car.toString());
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showCestAutoConfig', example: `@Cest
public class CestClass {

    @Egg
    public Wheel getWheel0() {
        return new Wheel();
    }

    @Egg(name = "michelin")
    public Wheel getWheel1() {
        return new Wheel("Michelin");
    }

    @Egg
    public Engine getEngine() {
        return new Engine("Audi");
    }

    @Egg
    public Car getCar() {
        return new Car();
    }

}`
    });

    CodeExampleService.addCodeExample({
        id: 'showInitOutputAutoConfig', example: `[main] INFO com.marioparrilla.snake.context.SnakeApplication - Auto registering cest eggs
[main] INFO com.marioparrilla.snake.context.SnakeApplication - Creating the eggs
[main] INFO com.marioparrilla.snake.context.SnakeApplication - All eggs were created
[main] INFO com.marioparrilla.snake.context.SnakeApplication - Auto registering eggs
[main] INFO com.marioparrilla.snake.context.SnakeApplication - All eggs were opened
Car{wheel1=Wheel{brand='Michelin'}, wheel2=Wheel{brand='No Brand'}, wheel3=Wheel{brand='Michelin'}, wheel4=Wheel{brand='No Brand'}, engine=Engine{brand='Audi'}}`
    });
}

export default init;