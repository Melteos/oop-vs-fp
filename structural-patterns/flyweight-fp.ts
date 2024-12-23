// Flyweight Factory Function
function createColorFactory(): (color: string) => string {
    const colors: { [key: string]: string } = {};

    return (color: string): string => {
        console.log("colors", colors);

        if (!colors[color]) {
            colors[color] = color;
        }
        return colors[color];
    };
}

// Usage
const getColor = createColorFactory();

const color1 = getColor("red");
const color2 = getColor("blue");
const color3 = getColor("red");

console.log(color1 === color2); // false
console.log(color1 === color3); // true
