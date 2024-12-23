// State type
type State = string;

// Memento type (stores the state)
type Memento = State;

// Originator function (returns state and a function to update it)
const createOriginator = (initialState: State) => {
    let state = initialState;

    return {
        getState: () => state,
        setState: (newState: State) => { state = newState; },
        saveStateToMemento: () => {
            console.log(`Saving state: ${state}`);
            return state
        }, // Save state to memento
        restoreStateFromMemento: (memento: Memento) => {
            console.log(`Restoring state: ${memento}`);
            state = memento;
        } // Restore from memento
    };
};

// Caretaker function (stores mementos)
const createCaretaker = () => {
    const mementos: Memento[] = [];

    return {
        addMemento: (memento: Memento) => mementos.push(memento),
        getMemento: (index: number) => mementos[index]
    };
};

// Client code
const originator = createOriginator('State1');
const caretaker = createCaretaker();

// Save the current state
caretaker.addMemento(originator.saveStateToMemento());

// Change state and save again
originator.setState('State2');
caretaker.addMemento(originator.saveStateToMemento());

// Restore to the previous state
originator.restoreStateFromMemento(caretaker.getMemento(0));

console.log(`Current State: ${originator.getState()}`);