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

 function sum(a:number, b:number){
    return a+b;
 }

 console.log(sum(5, 10));
console.log(sum(5, 10.5));

/*
   Create a function that accepts either a string or a number as 
   input and returns a message describing what type it received. Use union types to enforce this.
*/

function numString( strOrNum: string | number ){
    if(typeof strOrNum === "string"){
        return `You provide string ${strOrNum}`;
    }else{
   
        return `You provide number : ${strOrNum}`;
    }
}

console.log(numString("hello"));
console.log(numString(23));

/*
Create an interface called User with properties for name 
(string), age (number), and email (string). Then refactor 
the function below to add proper types for the parameters */

interface User{
    name:string, 
    age:number,
    email:string
}

function getUser(user:User){
    return `my name is ${user.name} and i have ${user.age} years old and this is my email: ${user.email}`;
}
console.log(getUser({name:"samuel", age:22, email:"samuelishimw02@gmail.com"}));

/*
     Create an enum called Status with values for "Active", "Inactive", and "Pending". 
     Write a function that accepts a Status and returns a descriptive message based on the status value.
*/

enum Status{
    Active="Active kbas",
    InActive="InActive",
    Pending="Pending"
}

function getMessage(sta:Status){
    return `The item is currently : ${sta}`;
}
console.log(getMessage(Status.Active));
console.log(getMessage(Status.Pending));

/*
   Create a generic function called getFirstElement that accepts an array of any type 
    returns the first element. The return type should match the input array's element type.
*/

function generi<T>(item:T[]):T |  undefined {

    return item[2];
}

console.log(generi([3,4,5,6]));
console.log(generi(["A","G","T"]));


/*
solve typing issues
*/

class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  static getCount(this:any) { // because static method does not have access to instance propertiesv
    return this.count; 
  }
}


//  Write a generic function identity that returns the value it receives without changing the type.
function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(42));   

/*
Write a TypeScript function processValue that takes string | number | boolean | null | undefined,
 uses type guards to log uppercase strings, numbers fixed to two decimals, and boolean as
 "True"/"False,” and throws an error for null or undefined, including a type assertion to narrow the type.
*/

function proccesse(item: string | number | boolean| null | undefined ){
    if(typeof item==="string"){
        console.log(item.toUpperCase());
    }
    else if(typeof item==="number"){
        console.log(item.toFixed(44));

    } else if(typeof item === 'boolean'){
        console.log(item)
    }else{
        throw Error ("this is error because it is null or undefined");
    }
    
}

proccesse("hello");
proccesse(3);
proccesse(false);


//Type the function parameter accordingly

interface Ingredient{
    name:string;
    quantity:number | string;
    price?:number;
}

interface Users{
    title:string;
    ingredients:Ingredient[];
    instructions:string;
}
const processRecipe = (recipe: Users) => {
  console.log(recipe.ingredients);
};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    { name: 'Flour', quantity: 4 },
    { name: 'Sugar', quantity: '1 cup', price: 5 },
  ],
  instructions: ""
});


// Update the function definition so that all tests pass
 function move(direction:'up'| 'down' | 'left' | 'right', distance: number) {}

// TESTS

move('up', 10);
move('left', 5);

move(
  // @ts-expect-error - "up-right" is not a valid direction
  'up-right',
  10
);

move(
  // @ts-expect-error - "down-left" is not a valid direction
  'down-left',
  20
);

move(
  'up',
  // @ts-expect-error - "20" is not a valid distance
  '20'
);



/*6. The following function is meant to log the city for a customer’s 
     shipping address. However, the code is unsafe and may throw runtime errors
    due to missing or undefined properties.Without changing the logic of the function,
    **fix the typing issues** and **make the function safe** using proper TypeScript types. */

    interface Address{
        city:string;
        street?:string
    }

    interface Customer{
        name:string;
        address:Address;
    }

    interface Order{
        customer:Customer;
    }
const logOrder = (order: Order) => {
  console.log(`Shipping to: ${order.customer.address.city}`);
};

logOrder({
  customer: {
    name: 'Jane',
    // address is missing
    address:{
        city:"Nyagatare"
    }
    
  }
});



// Debug the following  TypeScript Code Without Changing the Core Implementation

interface Car {
    brand: string;
    model?: string;
    price?: number;
}

function printCarModewl(car: Car) {
    if(car.model){
  console.log(car.model.toUpperCase());
    }else{
     console.log('no model here');
    }
     if(car.price !==undefined){
     console.log(car.price.toFixed(2));
     }
     else{
        
     }
   
   
}

// printCarModel({ brand: "Toyota" , price: '3000'});



interface Car {
    brand: string;
    model?: string;
    price?: number;
}

function printCarModel(car: Car) {
    if (car.model) {
        console.log(car.model.toUpperCase());
    } else {
        console.log('no model here');
    }

    if (car.price !== undefined) {
        console.log(car.price.toFixed(2));
    }
}

printCarModel({ brand: "Toyota", price: 3000 });
printCarModel({ brand: "Honda" });


// generic function to get last element of an array

interface Item{
    name:string;
    age:number;
    location:string;
     
}

interface Tasks{
    title:string;
    description:string;
    completed:boolean;
}

function getLastElement <T extends Item , U extends Tasks>(obj1:T , obj2:U){
    return [obj1, obj2]
} 


console.log(getLastElement({name:'sameul', age:22, location:'Rwanda'}, {title:'task1',description:'do something', completed:false}));   

 /*Create an interface Config with readonly properties for apiUrl (string) 
 and timeout (number). Demonstrate that these properties cannot be modified after creation.*/

interface Config{
    readonly apiUrl:string;
    readonly timeout:number;
}

const config:Config={
    apiUrl:"http//example.com",
    timeout:5000,
}

console.log(config);

/*
Create a type for direction that accepts only "north", "south", "east", or "west". Write a function that takes 
a direction and returns coordinates representing movement in that direction.
*/


function moves(direction: "north"| "south" | "east" |"west"){
    switch(direction){
        case "north":
            return {x:0,y:1};
            case "south":
                return {x:0, y:-1};
                case "east":
                    return {x:1, y:0 };
                    case "west":
                        return {x:-1, y:0}

    }
}

console.log(moves("north"));


/*Create a function that represents a user as a tuple with [name: string, age: number, active: boolean]. 
Write a function that destructures this tuple and returns a formatted string.*/


type UserTuple = [name:string, age:number, active:boolean];

function formatUserTuple(user: UserTuple): string {
  const [name, age, active] = user;
  return `${name} is ${age} years old and is ${active ? "active" : "inactive"}`;
}
console.log(formatUserTuple(["Alice", 3, true]));


/* 
 
*/
interface Product {
    name?: string;
    price: number;
}
function calculateTotal(items:Product[]) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total.toFixed(2);
}

function applyDiscount(amount:number, discount:number) {
  const discountedAmount = amount - (amount * discount);
  return discountedAmount;
}

const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 26 },
  { name: "Keyboard", price: 78 }
];

const total = calculateTotal(products);
console.log(`Total: $${total}`);


// to use the keyof operator

interface Person{
    name:string;
    age:number;
}

type keyofPerson= keyof Person;

const perso:keyofPerson='name';
console.log(perso)


// also keyof operator

interface Car{
    brand:string;
    year?:number;
    prices?:number
}


function getCar<T, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];

}

const car:Car={
    brand:'banz',
    year:2020,
    prices:20000000
}

const carBrand:string= getCar(car, 'brand');
console.log(carBrand);

// indexed accessed type 

interface MyUser{
    name:string;
    location:string;
}

type accesse= MyUser['location'];
let result :accesse='Kigali'
console.log(result)

// conditional type 

type Cars={
    name:string,
    price:number

}

type name= {name:string}
type carName= Cars extends name? String : any;

const ca:carName='vigo'
console.log(ca)

// to create custom mapped

type person={
    name:string;
    age:string
}

type BoalenFy<T>={
    [P in keyof T]:boolean;
}

const thi:BoalenFy<person>={
    name:true,
    age:true
}

console.log(thi)




