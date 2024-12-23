// Factory function generator for cars
function carFactory(brand: string, model: string): () => Car {
    return () => ({brand, model});
}

// Factory function generator for SUVs
function suvFactory(brand: string, model: string): () => SUV {
    return () => ({brand, model});
}

// Product type for car
type Car = {
    brand: string;
    model: string;
};

// Product type for SUV
type SUV = {
    brand: string;
    model: string;
};

const display = (c: {
    brand: string;
    model: string;
}) => {
    console.log(`${c.brand} ${c.model}`);
}

// Usage
const createMercedesCar = carFactory("Mercedes", "E-Class");
const createMercedesSUV = suvFactory("Mercedes", "GLC");

const createToyotaCar = carFactory("Toyota", "5 Series");
const createToyotaSuv = suvFactory("Toyota", "X5");

const mercedesCar = createMercedesCar();
const mercedesSUV = createMercedesSUV();

const toyotaCar = createToyotaCar();
const toyotaSUV = createToyotaSuv();

display(mercedesCar); // Output: Mercedes E-Class
display(mercedesSUV); // // Output: Mercedes GLC

display(toyotaCar); // Output: Toyota 5 Series
display(toyotaSUV); // Output: Toyota X5