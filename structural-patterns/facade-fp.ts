// Subsystems Functions
function startEngine(): void {
    console.log("Engine started");
}

function stopEngine(): void {
    console.log("Engine stopped");
}

function turnOnLights(): void {
    console.log("Lights turned on");
}

function turnOffLights(): void {
    console.log("Lights turned off");
}

function injectFuel(): void {
    console.log("Fuel injected");
}

function stopFuelInjection(): void {
    console.log("Fuel injection stopped");
}

// Car Type Definition
type Car = {
    carStart: () => void;
    carStop: () => void;
};

// Car Class Implementing the Facade Pattern
const createCar = (): Car => ({
    carStart: () => {
        turnOnLights();
        injectFuel();
        startEngine();
    },
    carStop: () => {
        stopEngine();
        stopFuelInjection();
        turnOffLights();
    }
});

// Usage
const myCar = createCar();

console.log("Starting the car:");
myCar.carStart();
console.log("--------");
console.log("Stopping the car:");
myCar.carStop();