// Pick in TS, is a utility type that allows you to create a new type by picking a set of properties 
// from an existing type.

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

// only a tyoe.
// Pick<what you want to pick from, what u want to pick>
// lets say user can only update three fields:
type updatedProps = Pick<User, 'name' | 'age' | 'email'>;


// Partial, makes all fields of an object optional
// lets say user may only want to update any one of the 3 possible fields.
type updatedPropsOptional = Partial<updatedProps>;

function updateUser(updatedProps: updatedPropsOptional) {
    // hits the databaase and update thie user
}

updateUser({
    name: 'John'
})

// Readonly
const employee1 = {
    name: "Junaid",
    age: 24
}

employee1.name = "Junuu"; // even though its a const, we can update its value.
// on an array or object it updates else it doesnt. because you are not updating employee, you are updating its values.

type employee = {
    name: string,
    age: number
}

const emp: Readonly<employee> = {
    name: "Haris",
    age: 20
}

// emp.age = 18; // error, because we are trying to update the object of type which uses readonly property.



// Record and Map 

// Record lets you give a cleaner type to objects.
type Users = Record<string,number> // key is string and value is number.

const users: Users = {
     "rrrr": 21,
     "adada": 32
}

// a more complex type:
type Complex = Record<string, {name: string, age: number}>
const complexObj = {
    "obj1": {name: "arslan",age:20},
    "obj2": {name: "junaid",age:24}
};

type WorkerTypee = {
    name: string,
    age: number,
    email: string,
}

// Maps: used for handling key value pairs in a more cleaner and easier syntax
const workers = new Map<string, WorkerTypee>();
workers.set("worker1", {name: "Affan", age:14, email:"affan@gmail.com"});
workers.set("worker2", {name: "Ahmad", age:12, email:"ahmad@gmail.com"});
workers.set("worker3", {name: "Hamza", age:10, email:"hamza@gmail.com"});

// you can use set, get, and delete methods on the map.
const w1 = workers.get("worker1");
console.log(w1);


// Exclude: it lets you exclude a certain property from a given type.

type eventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<eventType, 'click'>; // it will exclude click from the eventType type.

const handleEvent = (event: ExcludeEvent) => {
    console.log('Handling event', event);
}

// handleEvent('click'); // doesnt work bc click is excluded.
handleEvent('scroll'); // ok





