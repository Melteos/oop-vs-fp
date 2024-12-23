// Flyweight interface
interface Color {
    getColor(): string;
}

// Concrete Flyweight
class ConcreteColor implements Color {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}

// Flyweight Factory
class ColorFactory {
    private colors: { [key: string]: Color } = {};

    getColor(color: string): Color {
        if (!this.colors[color]) {
            this.colors[color] = new ConcreteColor(color);
        }
        return this.colors[color];
    }
}

// Usage
const colorFactory = new ColorFactory();

const color1 = colorFactory.getColor("red");
const color2 = colorFactory.getColor("blue");
const color3 = colorFactory.getColor("red");

console.log(color1 === color2); // false
console.log(color1 === color3); // true
