// Command type
type Command = () => void;

// Receiver
type Light = {
    turnOn: () => void;
    turnOff: () => void;
}

const createLight = (): Light => {
    return {
        turnOn: () => {
            console.log('Light is ON');
        },
        turnOff: () => {
            console.log('Light is OFF');
        },
    };
};

// Command factory functions
const createLightOnCommand = (light: Light): Command => () => light.turnOn();
const createLightOffCommand = (light: Light): Command => () => light.turnOff();

// Invoker
const pressButton = (command: Command) => {
    command();
};

// Client code
const light = createLight();
const lightOn = createLightOnCommand(light);
const lightOff = createLightOffCommand(light);

pressButton(lightOn);  // Light is ON
pressButton(lightOff); // Light is OFF