import CodeExampleService from "../code-examples/CodeExampleService";
import SectionService from "../sections/SectionService";
import { initTheme } from "../theme/ThemeService";

export const currentVersion = '0.1.5';
const init = () => {
    initTheme();
    initSections();
    initCodeExamples();
}

const initSections = () => {
    SectionService.addSection({
        id: 'home', section: [
            { sectionName: 'Welcome', href: '/' },
            { sectionName: 'Installation', href: '/installation' },
            { sectionName: 'Usage', href: '/usage' },
            { sectionName: 'Configuration', href: '/configuration' },
            { sectionName: 'Guide', href: '/guide' },
        ]
    });
    SectionService.addSection({
        id: 'installation', section: [
            { sectionName: 'Overview', href: '/installation' },
        ]
    });
    SectionService.addSection({
        id: 'config', section: [
            { sectionName: 'Overview', href: '/configuration' },
            { sectionName: 'Snake.conf.json', href: '/configuration/snakeConfJson' },
        ]
    });
    SectionService.addSection({
        id: 'usage', section: [
            { sectionName: 'Overview', href: '/usage' },
            { sectionName: 'Auto configuration', href: '/usage/autoconfig' },
            { sectionName: 'Manual configuration', href: '/usage/manualconfig' },
        ]
    });
    SectionService.addSection({
        id: 'guide', section: [
            { sectionName: 'Overview', href: '/guide' },
        ]
    });
    SectionService.addSection({
        id: 'functions', section: [
            { sectionName: 'init()', href: '/guide/functions/init' },
            { sectionName: 'run()', href: '/guide/functions/run' },
            { sectionName: 'cestsToScan()', href: '/guide/functions/cestsToScan' },
            { sectionName: 'classesToScan()', href: '/guide/functions/classestoscan' },
            { sectionName: 'enableVerboseLogTrace()', href: '/guide/functions/enableVerboseLogTrace' },
            { sectionName: 'getAllEggs()', href: '/guide/functions/getalleggs' },
            { sectionName: 'getEgg()', href: '/guide/functions/getegg' },
            { sectionName: 'containsEgg()', href: '/guide/functions/containsegg' },
        ]
    });
    SectionService.addSection({
        id: 'annotations', section: [
            { sectionName: '@Egg', href: '/guide/annotations/egg' },
            { sectionName: '@OpenEgg', href: '/guide/annotations/openegg' },
            { sectionName: '@Cest', href: '/guide/annotations/cest' },
            { sectionName: '@AutoConfig', href: '/guide/annotations/autoconfig' },
            { sectionName: '@Prop', href: '/guide/annotations/prop' },
            { sectionName: '@CustomConstructor', href: '/guide/annotations/customconstructor' },
            { sectionName: '@CustomParam', href: '/guide/annotations/customparam' },
        ]
    });
}

const initCodeExamples = () => {
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
        id: 'init()', example: `@AutoConfig(scan = {OneClass.class, OtherClass.class}, filter = {NoUse.class})
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'registerCest()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .cestsToScan(new Class[] {Cest.class})
                .run();
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'classesToScan()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .classesToScan(new Class[] {Main.class, Car.class, Engine.class, Wheel.class})
                .run();
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'enableVerboseLogTrace()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .enableVerboseLogTrace()
                .run();
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'getAllEggs()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
        Object[] eggs = context.getAllEggs();
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'getEgg()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
        Object egg = context.getEgg("Audi"); //Will return type Object because have not a Class to convert.
        Engine egg = context.getEgg(Engine.class); //Will return type of the Class gived and will return the first instance of this class in the context.
        Engine egg = context.getEgg("Audi", Engine.class); //Will return the egg with the name and class gived.
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'containEgg()', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
        boolean egg = context.containEgg("Audi");
        boolean egg = context.containEgg(Engine.class);
        boolean egg = context.containEgg("Audi", Engine.class);
    }
}`
    });


    CodeExampleService.addCodeExample({
        id: '@eggCest', example: `@Cest
public class CestClass {
    @Egg
    public Wheel getWheel0() {
        return new Wheel();
    }

    @Egg(name = "michelin")
    public Wheel getWheel1() {
        return new Wheel("Michelin");
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: '@eggMain', example: `@AutoConfig
public class Main {
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .run();
        Wheel wheel0 = context.getEgg(Wheel.class);
        Wheel wheel1 = context.getEgg("Michelin", Wheel.class);
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: '@openEggCar', example: `public class Car {
    @OpenEgg(name = "michelin")
    private Wheel wheel1;

    @OpenEgg
    private Wheel wheel2;

    @Override
    public String toString() {
        return "Car{" +
                "wheel1=" + wheel1 +
                ", wheel2=" + wheel2 +
                '}';
    }
}`
    });

    CodeExampleService.addCodeExample({
        id: 'showMainManualConfig', example: `public class Main {
    @OpenEgg
    static Car car;
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
                .init(Main.class)
                .cestsToScan(new Class[] {Cest.class})
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
        id: 'showMainAutoConfig', example: `@AutoConfig(scan = {CestClass.class, Car.class, Engine.class, Wheel.class})
public class Main {
    @OpenEgg
    static Car car;
    public static void main(String[] args) throws Exception {
        AutoConfigApplicationContext context = SnakeApplication
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

    CodeExampleService.addCodeExample({
        id: 'propFile', example: `engine.isElectricCar=true`
    });

    CodeExampleService.addCodeExample({
        id: '@PropExample', example: `public class Engine {
    private String brand;
    
    @Prop(name = "engine.isElectricCar")
    private boolean electricCar;
    
    public Engine(String brandName) {
        this.brand = brandName;
    }
    
    public String getBrand() {
        return brand;
    }
    
    public boolean isElectricCar() {
        return electricCar;
    }
    
    @Override
    public String toString() {
        return "Engine{" +
                "brand='" + brand + '\'' +
                "electricCar='" + electricCar+ '\'' +
                '}';
    }
}`
    });
    CodeExampleService.addCodeExample({
        id: 'Snake.conf.json', example: `{
    "props_file_path": "./configurations/", //Indicates where will be the properties file.
    "verbose_log_trace": true //Indicates if the application needs to be verbose when is logging.
}`
    });
}

export default init;