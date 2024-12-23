// Coffee Type
type Coffee = { cost: () => number; getDescription: () => string };

// Simple Coffee Function
function createSimpleCoffee(): Coffee {
    return {
        cost: () => 5,
        getDescription: () => "Simple coffee"
    };
}

// Decorator Function
function addDecorator(coffee: Coffee, costIncrease: number, description: string): Coffee {
    return {
        cost: () => coffee.cost() + costIncrease,
        getDescription: () => `${coffee.getDescription()}, ${description}`
    };
}

// Usage
let coffee = createSimpleCoffee();
console.log(coffee.getDescription(), "Cost:", coffee.cost());

coffee = addDecorator(coffee, 2, "with Milk");
console.log(coffee.getDescription(), "Cost:", coffee.cost());

coffee = addDecorator(coffee, 1, "with Sugar");
console.log(coffee.getDescription(), "Cost:", coffee.cost());
