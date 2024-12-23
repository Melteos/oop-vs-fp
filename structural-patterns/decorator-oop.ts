// Component interface
interface Coffee {
    cost(): number;
    getDescription(): string;
}

// Concrete component
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }

    getDescription(): string {
        return "Simple coffee";
    }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 2;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with Milk`;
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1;
    }

    getDescription(): string {
        return `${this.coffee.getDescription()}, with Sugar`;
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription(), "Cost:", coffee.cost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription(), "Cost:", coffee.cost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription(), "Cost:", coffee.cost());
