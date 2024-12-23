// Command Interface
interface Command {
    execute(): void;
}

// Concrete Commands
class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

// Receiver (Receiver of the command)
class Light {
    turnOn() {
        console.log('Light is ON');
    }

    turnOff() {
        console.log('Light is OFF');
    }
}

// Invoker
class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        if (this.command) {
            this.command.execute();
        }
    }
}

// Client code
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton();  // Light is ON

remote.setCommand(lightOff);
remote.pressButton();  // Light is OFF