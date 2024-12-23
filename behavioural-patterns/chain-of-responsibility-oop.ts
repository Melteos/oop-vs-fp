// Handler Interface
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

// Concrete Handlers
class ConcreteHandlerA implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request === 'A') {
            console.log('Handled by ConcreteHandlerA');
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class ConcreteHandlerB implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request === 'B') {
            console.log('Handled by ConcreteHandlerB');
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class ConcreteHandlerC implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request === 'C') {
            console.log('Handled by ConcreteHandlerC');
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Client Code
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.setNext(handlerB).setNext(handlerC);

handlerA.handle('B');  // Handled by ConcreteHandlerB