// Subject interface
interface Database {
    query(sql: string): string;
}

// Real Subject
class RealDatabase implements Database {
    query(sql: string): string {
        return `Executing query: ${sql}`;
    }
}

// Proxy
class DatabaseProxy implements Database {
    private realDatabase: RealDatabase;

    constructor() {
        this.realDatabase = new RealDatabase();
    }

    query(sql: string): string {
        console.log(`Logging: About to execute query: ${sql}`);
        return this.realDatabase.query(sql);
    }
}

// Client Code
const db: Database = new DatabaseProxy();
console.log(db.query("SELECT * FROM users"));
console.log(db.query("DELETE FROM orders WHERE id = 5"));