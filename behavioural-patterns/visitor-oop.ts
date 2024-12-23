// Visitor Interface
interface DiscountVisitor {
    visitBook(book: Book): number;
    visitElectronics(electronics: Electronics): number;
}

// Element Interface
interface CartItem {
    accept(visitor: DiscountVisitor): number;
}

// Concrete Elements
class Book implements CartItem {
    constructor(public price: number, public title: string) {}

    accept(visitor: DiscountVisitor): number {
        return visitor.visitBook(this);
    }
}

class Electronics implements CartItem {
    constructor(public price: number, public brand: string) {}

    accept(visitor: DiscountVisitor): number {
        return visitor.visitElectronics(this);
    }
}

// Concrete Visitor
class PercentageDiscountVisitor implements DiscountVisitor {
    visitBook(book: Book): number {
        console.log(`Applying 10% discount for book: ${book.title}`);
        return book.price * 0.9;
    }

    visitElectronics(electronics: Electronics): number {
        console.log(`Applying 15% discount for electronics: ${electronics.brand}`);
        return electronics.price * 0.85;
    }
}

// Client Code
const cart: CartItem[] = [
    new Book(100, "Romeo and Juliet"),
    new Electronics(500, "Iphone"),
];

const discountVisitor = new PercentageDiscountVisitor();

let total = 0;
cart.forEach((item) => {
    total += item.accept(discountVisitor);
});
console.log(`Total after discount: ${total}`);
// Output:
// Applying 10% discount for book: Romeo and Juliet
// Applying 15% discount for electronics: Iphone
// Total after discount: 485