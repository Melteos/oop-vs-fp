// Real Subject
const realDatabaseQuery = (sql: string): string => {
    return `Executing query: ${sql}`;
};

// Proxy (a higher-order function)
const databaseProxyQuery = (realDbFn: (sql: string) => string) => {
    return (sql: string): string => {
        console.log(`Logging: About to execute query: ${sql}`);
        return realDbFn(sql);
    };
};

// Client Code
const dbQuery = databaseProxyQuery(realDatabaseQuery);
console.log(dbQuery("SELECT * FROM users"));
console.log(dbQuery("DELETE FROM orders WHERE id = 5"));