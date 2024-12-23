// Iterator Interface
interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

// Concrete Iterator
class ArrayIterator<T> implements Iterator<T> {
    private index = 0;
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    // @ts-ignore
    next(): T | null {
        if (this.hasNext()) {
            return this.items[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.items.length;
    }
}

// Iterable Collection
class NumberCollection {
    private numbers: number[] = [];

    addNumber(num: number) {
        this.numbers.push(num);
    }

    createIterator(): Iterator<number> {
        // @ts-ignore
        return new ArrayIterator(this.numbers);
    }
}

// Client Code
const collection = new NumberCollection();
collection.addNumber(10);
collection.addNumber(20);
collection.addNumber(30);

const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next()); // Outputs: 10, 20, 30
}