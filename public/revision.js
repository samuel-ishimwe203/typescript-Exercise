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
console.log(getStatusMessage(Status.Active));
export {};
//# sourceMappingURL=revision.js.map