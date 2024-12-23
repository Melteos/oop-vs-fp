type Employee = {
    name: string;
    salary: number;
    subordinates?: Employee[];
};

// Pure functions for creation
const createDeveloper = (name: string, salary: number): Employee => ({
    name,
    salary,
});

const createManager = (name: string, salary: number, subordinates: Employee[] = []): Employee => ({
    name,
    salary,
    subordinates,
});

// Adding subordinates in an immutable way
const addSubordinate = (manager: Employee, employee: Employee): Employee => ({
    ...manager,
    subordinates: [...(manager.subordinates || []), employee],
});

const getTotalSalary = (employee: Employee): number =>
    employee.salary +
    (employee.subordinates?.reduce((total, emp) => total + getTotalSalary(emp), 0) || 0);

// Compositional updates
const addSubordinates = (manager: Employee, subordinates: Employee[]): Employee =>
    subordinates.reduce(addSubordinate, manager);

// Usage example
const dev1 = createDeveloper("Alice", 70000);
const dev2 = createDeveloper("Bob", 80000);
const manager = addSubordinates(
    createManager("Carol", 100000),
    [dev1, dev2]
);

console.log(getTotalSalary(manager)); // Output: 250000
console.log(getTotalSalary(dev2)); // Output: 80000