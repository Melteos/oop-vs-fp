const createSingleton = (() => {
    let instance: any;

    return () => {
        if (!instance) {
            instance = {};
        }
        return instance;
    };
})();

// Usage
const singleton1 = createSingleton();
const singleton2 = createSingleton();

console.log(singleton1 === singleton2); // Output: true
