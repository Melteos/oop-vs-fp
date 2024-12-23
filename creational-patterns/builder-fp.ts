// Type for Pizza
type Pizza = {
    toppings: string[];
    addTopping(topping: string): Pizza;
    describe(): void;
};

// Pizza builder function
function createPizzaBuilder(): {
    addCheese(): void;
    addPepperoni(): void;
    addPineapples(): void;
    addMushrooms(): void;
    build(): Pizza;
} {
    const toppings: string[] = [];

    return {
        addCheese() {
            toppings.push('cheese');
        },
        addPepperoni() {
            toppings.push('pepperoni');
        },
        addPineapples() {
            toppings.push('pineapples');
        },
        addMushrooms() {
            toppings.push('mushrooms');
        },
        build(): Pizza {
            return {
                toppings,
                addTopping(topping: string): Pizza {
                    return {...this, toppings: [...this.toppings, topping]};
                },
                describe() {
                    console.log(`Pizza with ${this.toppings.join(', ')} toppings.`);
                }
            };
        }
    };
}

function createHawaiianPizza(): Pizza {
    const pizzaBuilder = createPizzaBuilder();
    pizzaBuilder.addPineapples()
    pizzaBuilder.addCheese()
    pizzaBuilder.addMushrooms()
    return pizzaBuilder.build()
}

// Usage
const hawaiianPizza = createHawaiianPizza()
hawaiianPizza.describe(); // Output: Pizza with cheese, pepperoni, mushrooms toppings.

