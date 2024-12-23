type Laptop = {
    screenSize: number
}

type Desktop = {
    processor: string
}

type Computer = Desktop | Laptop;

function clone(computer: Computer): Computer {
    return {...computer}
}

// Factory function to create a computer
function createComputer(screenSize?: number, processor?: string): Computer {
    if(screenSize) {
        return {screenSize}
    }
    if(processor) {
        return {processor}
    }
}

// Usage
const laptopPrototype = createComputer(15.6);
const desktopPrototype = createComputer(null, "Intel Core i7");

const newLaptop = clone(laptopPrototype)
const newDesktop = clone(desktopPrototype);

console.log(newLaptop); // Output: { screenSize: 15.6 }
console.log(newDesktop); // Output: { processor: "Intel Core i7" }
