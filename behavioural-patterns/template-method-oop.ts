// Abstract Class
abstract class Beverage {
    prepareBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    private boilWater(): void {
        console.log('Boiling water...');
    }

    private pourInCup(): void {
        console.log('Pouring into cup...');
    }

    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}

// Concrete Class for Tea
class Tea extends Beverage {
    protected brew(): void {
        console.log('Steeping the tea...');
    }

    protected addCondiments(): void {
        console.log('Adding honey...');
    }
}

// Concrete Class for Coffee
class Coffee extends Beverage {
    protected brew(): void {
        console.log('Brewing the coffee...');
    }

    protected addCondiments(): void {
        console.log('Adding sugar and milk...');
    }
}

// Client Code
const tea = new Tea();
tea.prepareBeverage();
// Output:
// Boiling water...
// Steeping the tea...
// Pouring into cup...
// Adding honey...

const coffee = new Coffee();
coffee.prepareBeverage();
// Output:
// Boiling water...
// Brewing the coffee...
// Pouring into cup...
// Adding sugar and milk...