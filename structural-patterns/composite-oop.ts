interface Employee {
    getName(): string;
    getSalary(): number;
    getTotalSalary(): number;
    add(employee: Employee): void;
    remove(employee: Employee): void;
    getSubordinates(): Employee[];
}

class Developer implements Employee {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getTotalSalary(): number {
        return this.salary;
    }

    add(): void {
        throw new Error("Cannot add subordinates to a Developer.");
    }

    remove(): void {
        throw new Error("Cannot remove subordinates from a Developer.");
    }

    getSubordinates(): Employee[] {
        return [];
    }
}

class Manager implements Employee {
    private name: string;
    private salary: number;
    private subordinates: Employee[] = [];

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getTotalSalary(): number {
        return this.subordinates.reduce((total, emp) => total + emp.getTotalSalary(), this.salary);
    }

    add(employee: Employee): void {
        this.subordinates.push(employee);
    }

    remove(employee: Employee): void {
        const index = this.subordinates.indexOf(employee);
        if (index !== -1) {
            this.subordinates.splice(index, 1);
        }
    }

    getSubordinates(): Employee[] {
        return this.subordinates;
    }
}

// Usage
const dev1 = new Developer("Alice", 70000);
const dev2 = new Developer("Bob", 80000);
const manager = new Manager("Carol", 100000);
manager.add(dev1);
manager.add(dev2);

console.log(manager.getTotalSalary()); // Output: 250000
console.log(dev2.getTotalSalary()); // Output: 80000