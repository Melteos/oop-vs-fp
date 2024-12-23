// Handler type
type Handler = (request: string) => string | null;

const createHandler = (handlingType: string): Handler => {
    return (request) => {
        if (request === handlingType) {
            return `Handled by handler${handlingType}`;
        }
        return null;
    }
}

// Concrete Handlers
const handlerA: Handler = createHandler('A');
const handlerB: Handler = createHandler('B');
const handlerC: Handler = createHandler('C');

// Chain handler function
const chain = (handlers: Handler[]) => (request: string): string | null => {
    for (const handler of handlers) {
        const result = handler(request);
        if (result) {
            return result;
        }
    }
    return null;
};

// Client Code
const handlerChain = chain([handlerA, handlerB, handlerC]);

console.log(handlerChain('B'));  // Handled by handlerB