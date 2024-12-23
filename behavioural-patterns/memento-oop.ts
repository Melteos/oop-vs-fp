// Memento (stores the state)
class Memento {
    constructor(private state: string) {}

    getState(): string {
        return this.state;
    }
}

// Originator (creates a memento and restores state)
class Originator {
    private state: string;

    constructor(state: string) { this.state = state; }

    setState(state: string) { this.state = state; }

    getState(): string { return this.state; }

    saveStateToMemento(): Memento {
        console.log(`Saving state: ${this.state}`);
        return new Memento(this.state);
    }

    restoreStateFromMemento(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Restoring state: ${this.state}`);
    }
}

// Caretaker (keeps track of mementos)
class Caretaker {
    private mementoList: Memento[] = [];

    addMemento(memento: Memento): void {
        this.mementoList.push(memento);
    }

    getMemento(index: number): Memento {
        return this.mementoList[index];
    }
}

// Client code
const originator = new Originator('State1');
const caretaker = new Caretaker();

// Save the current state
caretaker.addMemento(originator.saveStateToMemento());

// Change state and save again
originator.setState('State2');
caretaker.addMemento(originator.saveStateToMemento());

// Restore to the previous state
originator.restoreStateFromMemento(caretaker.getMemento(0));