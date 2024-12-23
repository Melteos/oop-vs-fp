// Product class
class Pizza {
    private toppings: string[] = [];

    addTopping(topping: string) {
        this.toppings.push(topping);
    }

    describe(): void {
        console.log(`Pizza with ${this.toppings.join(', ')} toppings.`);
    }
}

// Builder interface
interface PizzaBuilder {
    addCheese(): PizzaBuilder;
    addPineapples(): PizzaBuilder;
    addMushrooms(): PizzaBuilder;
    build(): Pizza;
}

// Concrete Builder
class HawaiianPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    addCheese(): PizzaBuilder {
        this.pizza.addTopping('cheese');
        return this;
    }

    addPineapples(): PizzaBuilder {
        this.pizza.addTopping('pineapples');
        return this;
    }

    addMushrooms(): PizzaBuilder {
        this.pizza.addTopping('mushrooms');
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }
}

// Director
class PizzaDirector {
    constructHawaiianPizza(): Pizza {
        return new HawaiianPizzaBuilder()
            .addCheese()
            .addPineapples()
            .addMushrooms()
            .build();
    }
}

// Usage
const director = new PizzaDirector();
const hawaiianPizza = director.constructHawaiianPizza();
hawaiianPizza.describe(); // Output: Pizza with cheese, pineapples, mushrooms toppings.
