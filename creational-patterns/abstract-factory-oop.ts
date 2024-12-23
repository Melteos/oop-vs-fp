// Abstract Product A
class Car {
    brand: string;
    model: string;


    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    display(): void {
        console.log(`${this.brand} ${this.model}`);
    }
}

// Abstract Product B
class SUV {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    display(): void {
        console.log(`${this.brand} ${this.model}`);
    }
}

// Abstract Factory
abstract class CarFactory {
    abstract createCar(): Car;
    abstract createSUV(): SUV;
}

// Concrete Factory 1
class MercedesFactory extends CarFactory {
    createCar(): Car {
        return new Car("Mercedes", "E-Class");
    }

    createSUV(): SUV {
        return new SUV("Mercedes", "GLC");
    }
}

// Concrete Factory 2
class ToyotaFactory extends CarFactory {
    createCar(): Car {
        return new Car("Toyota", "5 Series");
    }

    createSUV(): SUV {
        return new SUV("Toyota", "X5");
    }
}

// Usage
const mercedesFactory = new MercedesFactory();
const mercedesCar = mercedesFactory.createCar();
const mercedesSUV = mercedesFactory.createSUV();

const toyotaFactory = new ToyotaFactory();
const toyotaCar = toyotaFactory.createCar();
const toyotaSUV = toyotaFactory.createSUV();

mercedesCar.display(); // Output: Mercedes E-Class
mercedesSUV.display(); // Output: Mercedes GLC

toyotaCar.display(); // Output: Toyota 5 Series
toyotaSUV.display(); // Output: Toyota X5