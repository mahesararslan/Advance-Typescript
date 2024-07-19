"use strict";
// Pick in TS, is a utility type that allows you to create a new type by picking a set of properties 
// from an existing type.
function updateUser(updatedProps) {
    // hits the databaase and update thie user
}
updateUser({
    name: 'John'
});
// Readonly
const employee1 = {
    name: "Junaid",
    age: 24
};
employee1.name = "Junuu"; // even though its a const, we can update its value.
const emp = {
    name: "Haris",
    age: 20
};
const users = {
    "rrrr": 21,
    "adada": 32
};
const complexObj = {
    "obj1": { name: "arslan", age: 20 },
    "obj2": { name: "junaid", age: 24 }
};
// Maps
const workers = new Map();
workers.set("worker1", { name: "Affan", age: 14, email: "affan@gmail.com" });
workers.set("worker2", { name: "Ahmad", age: 12, email: "ahmad@gmail.com" });
workers.set("worker3", { name: "Hamza", age: 10, email: "hamza@gmail.com" });
// you can use set, get, and delete methods on the map.
const w1 = workers.get("worker1");
console.log(w1);
