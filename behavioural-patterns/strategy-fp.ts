// Function as Interface
type PaymentStrategy = (amount: number) => void;

// Concrete Strategies
const creditCardPayment: PaymentStrategy = (amount) => {
    console.log(`Paying ${amount} using Credit Card`);
};

const paypalPayment: PaymentStrategy = (amount) => {
    console.log(`Paying ${amount} using PayPal`);
};

// Client code
const processPayment = (strategy: PaymentStrategy, amount: number) => {
    strategy(amount);
};

// Usage
processPayment(creditCardPayment, 100);
processPayment(paypalPayment, 200);