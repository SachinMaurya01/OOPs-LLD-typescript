import { Database } from "./Database";

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true
console.log(db1.query("SELECT * FROM users")); // Executing query: SELECT * FROM users
console.log(db2.query("SELECT * FROM products")); // Executing query: SELECT * FROM products