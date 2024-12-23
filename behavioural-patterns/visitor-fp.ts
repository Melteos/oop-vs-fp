// Items
type CartItem = { type: "Book"; price: number; title: string } | { type: "Electronics"; price: number; brand: string };

// Visitor Function
const applyDiscount = (item: CartItem): number => {
    const discountStrategies: Record<CartItem["type"], (item: CartItem) => number> = {
        Book: (item) => {
            console.log(`Applying 10% discount for book: ${(item as any).title}`);
            return item.price * 0.9;
        },
        Electronics: (item) => {
            console.log(`Applying 15% discount for electronics: ${(item as any).brand}`);
            return item.price * 0.85;
        },
    };
    return discountStrategies[item.type](item);
};

// Client Code
const cart: CartItem[] = [
    { type: "Book", price: 100, title: "Romeo and Juliet" },
    { type: "Electronics", price: 500, brand: "Iphone" },
];

const total = cart.reduce((sum, item) => sum + applyDiscount(item), 0);
console.log(`Total after discount: ${total}`);
// Output:
// Applying 10% discount for book: Romeo and Juliet
// Applying 15% discount for electronics: Iphone
// Total after discount: 485