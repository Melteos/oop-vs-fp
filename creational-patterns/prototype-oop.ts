// Abstract class representing a Computer prototype
abstract class ComputerPrototype {
    abstract clone(): ComputerPrototype;
}

// Concrete class representing a specific type of computer
class Laptop extends ComputerPrototype {
    private screenSize: number;

    constructor(screenSize: number) {
        super();
        this.screenSize = screenSize;
    }

    clone(): Laptop {
        return new Laptop(this.screenSize);
    }
}

// Concrete class representing a specific type of computer
class Desktop extends ComputerPrototype {
    private processor: string;

    constructor(processor: string) {
        super();
        this.processor = processor;
    }

    clone(): Desktop {
        return new Desktop(this.processor);
    }
}

// Usage
const laptopPrototype = new Laptop(15.6);
const desktopPrototype = new Desktop("Intel Core i7");

const newLaptop = laptopPrototype.clone();
const newDesktop = desktopPrototype.clone();

console.log(newLaptop); // Laptop { screenSize: 15.6 }
console.log(newDesktop); // Desktop { processor: "Intel Core i7" }
