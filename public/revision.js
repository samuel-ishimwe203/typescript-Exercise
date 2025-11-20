//Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10));
function introduceUser(user) {
    return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}
console.log(introduceUser({ name: " Alice",
    age: 28,
    email: "alice@example.com" }));
//  Create an enum called Status with values for "Active", "Inactive", and "Pending". Write a function that accepts a Status and returns a descriptive message based on the status value.
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
function getStatusMessage(status) {
    return `The current status is: ${status}`;
}
console.log(getStatusMessage(Status.Pending));
/*Create a generic function called getFirstElement that accepts an array of any type and returns the first element. The return type should match the input array's element type.*/
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([{ id: 1 }, { id: 2 }]));
function describeManagerEmployee(me) {
    return `${me.name} ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const add = (c, d) => c + d;
const multiply = (c, d) => c * d;
console.log(applyOperation(10, 5, add));
console.log(applyOperation(10, 5, multiply));
function printCarModel(car) {
    if (car.model) {
        console.log(car.model.toUpperCase());
    }
    else {
        console.log("no model provided");
    }
    ;
    if (car.price !== undefined) {
        console.log(car.price.toFixed(2));
    }
}
printCarModel({ brand: "Toyota", price: 3000 });
export {};
//# sourceMappingURL=revision.js.map