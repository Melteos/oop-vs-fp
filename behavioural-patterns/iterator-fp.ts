// Functional Iterator
const createArrayIterator = <T>(items: T[]) => {
    let index = 0;

    return {
        next: (): T | null => {
            if (index < items.length) {
                return items[index++];
            }
            return null;
        },
        hasNext: (): boolean => index < items.length,
    };
};

// Client Code
const numbers = [10, 20, 30];

const iterator = createArrayIterator(numbers);

while (iterator.hasNext()) {
    console.log(iterator.next()); // Outputs: 10, 20, 30
}

// Functional-style forEach
const forEach = <T>(items: T[], callback: (item: T) => void) => {
    const iter = createArrayIterator(items);
    while (iter.hasNext()) {
        callback(iter.next()!);
    }
};

// Client Code with forEach
//forEach(numbers, (num) => console.log(num)); // Outputs: 10, 20, 30