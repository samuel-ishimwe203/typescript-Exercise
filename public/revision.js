/*//Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
 
function addNumbers( a:number , b:number){
    return a+b;
}

console.log(addNumbers(5, 10));


interface User{
    name: string
     age: number,
     email: string
    }

function introduceUser(user: User) {
  return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}

console.log(introduceUser({name:" Alice",
    age:28,
    email:"alice@example.com"}));
//  Create an enum called Status with values for "Active", "Inactive", and "Pending". Write a function that accepts a Status and returns a descriptive message based on the status value.

enum Status{
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending"
}
function getStatusMessage(status: Status):string{
   return `The current status is: ${status}`;
}

console.log(getStatusMessage(Status.Pending));

Create a generic function called getFirstElement that accepts an array of any type and returns the first element. The return type should match the input array's element type.

function getFirstElement<D>(arr: D[]): D | undefined {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([{ id: 1 }, { id: 2 }]));

  //Create two interfaces: Employee with properties name and employeeId, and Manager with property teamSize. Create an intersection type ManagerEmployee and write a function that describes a manager employee.

interface Employee {
    name: string;
    employeeId: number;
}

interface Manager {
    teamSize: number;
}

type ManagerEmployee = Employee & Manager;

function describeManagerEmployee(me: ManagerEmployee) {
    return `${me.name} ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));





//Create a type alias for a function that takes two numbers and returns a number. Use this type to create a function that applies a mathematical operation to two numbers.





type MathOperation = (a: number, b: number) => number;

function applyOperation(a: number, b: number, operation: MathOperation): number {
    return operation(a, b,);
}
const add: MathOperation = (c,d,) => c + d;
const multiply: MathOperation = (c, d,) => c * d;

console.log(applyOperation(10, 5, add));
console.log(applyOperation(10, 5,multiply));

 // debug the following code without changing the core implementation
 
 interface Car{
    brand:string,
    model?:string,
    price?:number,
 }

 function printCarModel (car:Car){
    if(car.model){
        console.log(car.model.toUpperCase());
    }
    else{
            console.log("no model provided");
    };

    if(car.price !==undefined){

           console.log(car.price.toFixed(2));

    }

    
    
    
 
 }
 printCarModel({brand:"Toyota", price:3000}); */
// Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
console.log(sum(5, 10.5));
export {};
//# sourceMappingURL=revision.js.map