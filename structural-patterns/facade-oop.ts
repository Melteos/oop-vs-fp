// Subsystems
class Engine {
    start(): void {
        console.log("Engine started");
    }

    stop(): void {
        console.log("Engine stopped");
    }
}

class Lights {
    turnOn(): void {
        console.log("Lights turned on");
    }

    turnOff(): void {
        console.log("Lights turned off");
    }
}

class FuelInjector {
    injectFuel(): void {
        console.log("Fuel injected");
    }

    stopInjection(): void {
        console.log("Fuel injection stopped");
    }
}

// Facade
class CarFacade {
    private engine: Engine;
    private lights: Lights;
    private fuelInjector: FuelInjector;

    constructor() {
        this.engine = new Engine();
        this.lights = new Lights();
        this.fuelInjector = new FuelInjector();
    }

    startCar(): void {
        this.lights.turnOn();
        this.fuelInjector.injectFuel();
        this.engine.start();
    }

    stopCar(): void {
        this.engine.stop();
        this.fuelInjector.stopInjection();
        this.lights.turnOff();
    }
}

// Usage
const carFacade = new CarFacade();
console.log("Starting the car:");
carFacade.startCar();
console.log("--------");
console.log("Stopping the car:");
carFacade.stopCar();
