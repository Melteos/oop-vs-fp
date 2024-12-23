// State Interface
interface DocumentState {
    publish(document: MyDocument, userRole: string): void;
    getName(): string; // Returns the name of the state
}

// Context (Document class)
class MyDocument {
    private state: DocumentState;

    constructor(initialState: DocumentState) {
        this.state = initialState;
    }

    setState(state: DocumentState): void {
        console.log(`Document: Transitioning to ${state.getName()}`);
        this.state = state;
    }

    publish(userRole: string): void {
        this.state.publish(this, userRole);
    }

    getState(): string {
        return this.state.getName();
    }
}

// Concrete States
class DraftState implements DocumentState {
    publish(document: MyDocument, userRole: string): void {
        console.log("DraftState: Moving document to Moderation.");
        document.setState(new ModerationState());
    }

    getName(): string {
        return "Draft";
    }
}

class ModerationState implements DocumentState {
    publish(document: MyDocument, userRole: string): void {
        if (userRole === "admin") {
            console.log("ModerationState: Publishing the document.");
            document.setState(new PublishedState());
        } else {
            console.log("ModerationState: Only admins can publish documents.");
        }
    }

    getName(): string {
        return "Moderation";
    }
}

class PublishedState implements DocumentState {
    publish(document: MyDocument, userRole: string): void {
        console.log("PublishedState: Document is already published. No action taken.");
    }

    getName(): string {
        return "Published";
    }
}

// Client code
const draftState = new DraftState();
const myDocument = new MyDocument(draftState);

console.log(`Current State: ${myDocument.getState()}`); // "Current State: Draft"
myDocument.publish("user");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Moderation"
myDocument.publish("user");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Moderation"
myDocument.publish("admin");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Published"
myDocument.publish("admin");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Published"