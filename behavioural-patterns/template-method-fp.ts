// Template Method
const prepareBeverage = (
    brew: () => void,
    addCondiments: () => void
): void => {
    console.log('Boiling water...');
    brew();
    console.log('Pouring into cup...');
    addCondiments();
};

// Concrete Recipes
const prepareTea = () => {
    prepareBeverage(
        () => console.log('Steeping the tea...'),
        () => console.log('Adding honey...')
    );
};

const prepareCoffee = () => {
    prepareBeverage(
        () => console.log('Brewing the coffee...'),
        () => console.log('Adding sugar and milk...')
    );
};

// Client Code
prepareTea();
// Output:
// Boiling water...
// Steeping the tea...
// Pouring into cup...
// Adding honey...

prepareCoffee();
// Output:
// Boiling water...
// Brewing the coffee...
// Pouring into cup...
// Adding sugar and milk...