// State Type
type DocumentState = {
    publish: (userRole: string) => DocumentState;
    getState: () => string;
};

// State Implementations
const draftState: DocumentState = {
    publish: userRole => {
        console.log("DraftState: Moving document to Moderation.");
        return moderationState;
    },
    getState: () => "Draft",
};

const moderationState: DocumentState = {
    publish: userRole => {
        if (userRole === "admin") {
            console.log("ModerationState: Publishing the document.");
            return publishedState;
        } else {
            console.log("ModerationState: Only admins can publish documents.");
            return moderationState;
        }
    },
    getState: () => "Moderation",
};

const publishedState: DocumentState = {
    publish: userRole => {
        console.log("PublishedState: Document is already published. No action taken.");
        return publishedState;
    },
    getState: () => "Published",
};

// Document Context (stateless function)
const createDocument = (initialState: DocumentState) => {
    let currentState = initialState;

    return {
        publish: (userRole: string) => {
            currentState = currentState.publish(userRole);
        },
        getState: (): string => currentState.getState(),
    };
};

// Client code
const myDocument = createDocument(draftState);

console.log(`Current State: ${myDocument.getState()}`); // "Current State: Draft"
myDocument.publish("user");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Moderation"
myDocument.publish("user");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Moderation"
myDocument.publish("admin");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Published"
myDocument.publish("admin");
console.log(`Current State: ${myDocument.getState()}`); // "Current State: Published"