// Context
class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    processPayment(amount: number) {
        this.strategy.pay(amount);
    }
}

// Strategy Interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(`Paying ${amount} using Credit Card`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(`Paying ${amount} using PayPal`);
    }
}

// Client Code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.processPayment(100);

paymentContext.setStrategy(new PayPalPayment());
paymentContext.processPayment(200);