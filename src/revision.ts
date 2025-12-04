
//  // Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.

//  function sum(a:number, b:number){
//     return a+b;
//  }

//  console.log(sum(5, 10));
// console.log(sum(5, 10.5));

// /*
//    Create a function that accepts either a string or a number as 
//    input and returns a message describing what type it received. Use union types to enforce this.
// */

// function numString( strOrNum: string | number ){
//     if(typeof strOrNum === "string"){
//         return `You provide string ${strOrNum}`;
//     }else{
   
//         return `You provide number : ${strOrNum}`;
//     }
// }

// console.log(numString("hello"));
// console.log(numString(23));

// /*
// Create an interface called User with properties for name 
// (string), age (number), and email (string). Then refactor 
// the function below to add proper types for the parameters */

// interface User{
//     name:string, 
//     age:number,
//     email:string
// }

// function getUser(user:User){
//     return `my name is ${user.name} and i have ${user.age} years old and this is my email: ${user.email}`;
// }
// console.log(getUser({name:"samuel", age:22, email:"samuelishimw02@gmail.com"}));

// /*
//      Create an enum called Status with values for "Active", "Inactive", and "Pending". 
//      Write a function that accepts a Status and returns a descriptive message based on the status value.
// */

// enum Status{
//     Active="Active kbas",
//     InActive="InActive",
//     Pending="Pending"
// }

// function getMessage(sta:Status){
//     return `The item is currently : ${sta}`;
// }
// console.log(getMessage(Status.Active));
// console.log(getMessage(Status.Pending));

// /*
//    Create a generic function called getFirstElement that accepts an array of any type 
//     returns the first element. The return type should match the input array's element type.
// */

// function generi<T>(item:T[]):T |  undefined {

//     return item[2];
// }

// console.log(generi([3,4,5,6]));
// console.log(generi(["A","G","T"]));


// /*
// solve typing issues
// */

// class Counter {
//   count = 0;

//   increment() {
//     this.count++;
//   }

//   static getCount(this:any) { // because static method does not have access to instance propertiesv
//     return this.count; 
//   }
// }


// //  Write a generic function identity that returns the value it receives without changing the type.
// function identity<T>(value: T): T {
//     return value;
// }
// console.log(identity<number>(42));   

// /*
// Write a TypeScript function processValue that takes string | number | boolean | null | undefined,
//  uses type guards to log uppercase strings, numbers fixed to two decimals, and boolean as
//  "True"/"False,” and throws an error for null or undefined, including a type assertion to narrow the type.
// */

// function proccesse(item: string | number | boolean| null | undefined ){
//     if(typeof item==="string"){
//         console.log(item.toUpperCase());
//     }
//     else if(typeof item==="number"){
//         console.log(item.toFixed(4));

//     } else if(typeof item === 'boolean'){
//         console.log(item)
//     }else{
//         throw Error ("this is error because it is null or undefined");
//     }
    
// }

// proccesse("hello");
// proccesse(3);
// proccesse(false);


// //Type the function parameter accordingly

// interface Ingredient{
//     name:string;
//     quantity:number | string;
//     price?:number;
// }

// interface Users{
//     title:string;
//     ingredients:Ingredient[];
//     instructions:string;
// }
// const processRecipe = (recipe: Users) => {
//   console.log(recipe.ingredients);
// };

// processRecipe({
//   title: 'Chocolate Chip Cookies',
//   ingredients: [
//     { name: 'Flour', quantity: 4 },
//     { name: 'Sugar', quantity: '1 cup', price: 5 },
//   ],
//   instructions: ""
// });


// // Update the function definition so that all tests pass
//  function move(direction:'up'| 'down' | 'left' | 'right', distance: number) {}

// // TESTS

// move('up', 10);
// move('left', 5);

// move(
//   // @ts-expect-error - "up-right" is not a valid direction
//   'up-right',
//   10
// );

// move(
//   // @ts-expect-error - "down-left" is not a valid direction
//   'down-left',
//   20
// );

// move(
//   'up',
//   // @ts-expect-error - "20" is not a valid distance
//   '20'
// );



// /*6. The following function is meant to log the city for a customer’s 
//      shipping address. However, the code is unsafe and may throw runtime errors
//     due to missing or undefined properties.Without changing the logic of the function,
//     **fix the typing issues** and **make the function safe** using proper TypeScript types. */

//     interface Address{
//         city:string;
//         street?:string
//     }

//     interface Customer{
//         name:string;
//         address:Address;
//     }

//     interface Order{
//         customer:Customer;
//     }
// const logOrder = (order: Order) => {
//   console.log(`Shipping to: ${order.customer.address.city}`);
// };

// logOrder({
//   customer: {
//     name: 'Jane',
//     // address is missing
//     address:{
//         city:"Nyagatare"
//     }
    
//   }
// });



// // Debug the following  TypeScript Code Without Changing the Core Implementation

// interface Car {
//     brand: string;
//     model?: string;
//     price?: number;
// }

// function printCarModewl(car: Car) {
//     if(car.model){
//   console.log(car.model.toUpperCase());
//     }else{
//      console.log('no model here');
//     }
//      if(car.price !==undefined){
//      console.log(car.price.toFixed(2));
//      }
//      else{
        
//      }
   
   
// }

// // printCarModel({ brand: "Toyota" , price: '3000'});



// interface Car {
//     brand: string;
//     model?: string;
//     price?: number;
// }

// function printCarModel(car: Car) {
//     if (car.model) {
//         console.log(car.model.toUpperCase());
//     } else {
//         console.log('no model here');
//     }

//     if (car.price !== undefined) {
//         console.log(car.price.toFixed(2));
//     }
// }

// printCarModel({ brand: "Toyota", price: 3000 });
// printCarModel({ brand: "Honda" });


// // generic function to get last element of an array

// interface Item{
//     name:string;
//     age:number;
//     location:string;
     
// }

// interface Tasks{
//     title:string;
//     description:string;
//     completed:boolean;
// }

// function getLastElement <T extends Item , U extends Tasks>(obj1:T , obj2:U){
//     return [obj1, obj2]
// } 


// console.log(getLastElement({name:'sameul', age:22, location:'Rwanda'}, {title:'task1',description:'do something', completed:false}));   

//  /*Create an interface Config with readonly properties for apiUrl (string) 
//  and timeout (number). Demonstrate that these properties cannot be modified after creation.*/

// interface Config{
//     readonly apiUrl:string;
//     readonly timeout:number;
// }

// const config:Config={
//     apiUrl:"http//example.com",
//     timeout:5000,
// }

// console.log(config);

// /*
// Create a type for direction that accepts only "north", "south", "east", or "west". Write a function that takes 
// a direction and returns coordinates representing movement in that direction.
// */


// function moves(direction: "north"| "south" | "east" |"west"){
//     switch(direction){
//         case "north":
//             return {x:0,y:1};
//             case "south":
//                 return {x:0, y:-1};
//                 case "east":
//                     return {x:1, y:0 };
//                     case "west":
//                         return {x:-1, y:0}

//     }
// }

// console.log(moves("north"));


// /*Create a function that represents a user as a tuple with [name: string, age: number, active: boolean]. 
// Write a function that destructures this tuple and returns a formatted string.*/


// type UserTuple = [name:string, age:number, active:boolean];

// function formatUserTuple(user: UserTuple): string {
//   const [name, age, active] = user;
//   return `${name} is ${age} years old and is ${active ? "active" : "inactive"}`;
// }
// console.log(formatUserTuple(["Alice", 3, true]));


// /* 
 
// */
// interface Product {
//     name?: string;
//     price: number;
// }
// function calculateTotal(items:Product[]) {
//   let total = 0;
//   for (let item of items) {
//     total += item.price;
//   }
//   return total.toFixed(2);
// }

// function applyDiscount(amount:number, discount:number) {
//   const discountedAmount = amount - (amount * discount);
//   return discountedAmount;
// }

// const products = [
//   { name: "Laptop", price: 999 },
//   { name: "Mouse", price: 26 },
//   { name: "Keyboard", price: 78 }
// ];

// const total = calculateTotal(products);
// console.log(`Total: $${total}`);


// // to use the keyof operator

// interface Person{
//     name:string;
//     age:number;
// }

// type keyofPerson= keyof Person;

// const perso:keyofPerson='name';
// console.log(perso)


// // also keyof operator

// interface Car{
//     brand:string;
//     year?:number;
//     prices?:number
// }


// function getCar<T, K extends keyof T>(obj:T, key:K):T[K]{
//     return obj[key];

// }

// const car:Car={
//     brand:'banz',
//     year:2020,
//     prices:20000000
// }

// const carBrand:string= getCar(car, 'brand');
// console.log(carBrand);

// // indexed accessed type 

// interface MyUser{
//     name:string;
//     location:string;
// }

// type accesse= MyUser['location'];
// let result :accesse='Kigali'
// console.log(result)

// // conditional type 

// type Cars={
//     name:string,
//     price:number

// }

// type name= {name:string}
// type carName= Cars extends name? String : any;

// const ca:carName='vigo'
// console.log(ca)

// // to create custom mapped

// type person={
//     name:string;
//     age:string
// }

// type BoalenFy<T>={
//     [P in keyof T]:boolean;
// }

// const thi:BoalenFy<person>={
//     name:true,
//     age:true
// }

// console.log(thi)



// // how type assertion works
// // by as 
// let value:any ="hello";
// let results=(value as string)
// console.log(results.toUpperCase())

// // type casting 

// let age:string="25";
// let age2:number=Number(age)
// console.log(age2 +5);

// interface Items{
//     nema:string; 
//     age:number;
    

// }

// 

interface User{
    id:number;
    name:string;
    email:string;
    password:number;
    createAt:string;
}

// type PublicUser =Omit<User, 'password'>
// type UserPreview =Pick<User, "id" |"name" | "email" >
// const user: PublicUser = {id:1,
//     name:'samuel',
//     email:'samue@gmail.com',
//     createAt:"sss",
//  };

// const publicUser: PublicUser = user; // Should work, password is optional
// const preview: UserPreview = { id: 1, name: "Alice", email: "alice@example.com" };

// console.log(publicUser)
// console.log(preview)





//

type Product={
    name:string;
    price:number;
}
function calculateTotal(items:Product[]) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total.toFixed(2);
}

function applyDiscount(amount:number, discount:number):number {
  const discountedAmount = amount - (amount * discount);
  return Number(discountedAmount.toFixed(2));
}

const products:Product[] = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 79 }
];

const total = calculateTotal(products);

//


enum Status{
  Active='active',
  InActive='Inactive',
  Pending ='pending'

}
function getStatusMessage(status:Status) {
  // Your code here
  return `the process is :${status}`
}
console.log(getStatusMessage(Status.InActive))

// 

function getFirstElement<T>(arr:T[]){

  return arr[0];

}

console.log(getFirstElement([1, 2, 3]))
console.log(getFirstElement(["a","b","c"]))


// Define a missing TypeScript types
type Operation = (a: number, b: number) => number; 
function applyOperation(a:number, b:number, operation: Operation) {
  return operation(a, b);
}

const add = (x:number, y:number) => x + y;
const multiply = (x:number, y:number) => x * y;

console.log(applyOperation(5, 10, add));
console.log(applyOperation(5, 10, multiply));
//


type Value=string|number| boolean;
function processValue(value:Value) {
  
  if(typeof value==='string'){
    console.log(value.toUpperCase())
  }else if(typeof value==='number'){
        console.log(value*2);
  }else{
    return -value
  }

}

processValue('hello')
processValue(5)
console.log (processValue(true))


// 
function move(direction:"north"| "south" | "east" |"west") {
  switch(direction) {
    case "north":
      return { x: 0, y: 1 };
    case "south":
      return { x: 0, y: -1 };
    case "east":
      return { x: 1, y: 0 };
    case "west":
      return { x: -1, y: 0 };
  }
}


console.log(move("north"));



// 

 class BankAccount {
  // Your code here
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
      }

  deposit(amount: number): void {
    this.balance += amount;
  }   

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;   
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance(): number {
    return this.balance;
  } 
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); 


interface User {
  name: string;
  age: number;
  email: string;
}


// Generic specialized


type apiResponse<Data>={
  data:Data;
  isError:boolean
}

type responseRes=apiResponse<{data:string, age:number}>
const response:responseRes={

  data:{
    data:'success',
    age:436
  },
  isError:true

}

console.log(response)


//

interface Book{
  title:string, isbn:string}
const items: (Book | string)[] = [
  { title: "1984", isbn: "978-0451524935" },
  "Not a book",
  { title: "Brave New World", isbn: "978-0060085261" }
];

function isBook(value:{}){
  return value

}

const books = items.filter(isBook);
console.log(books)



/*enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUEs"

}

function getColorCode(color: Color): never {
  
  throw new Error(`input the color ${color}`);
}

console.log(getColorCode(Color.Blue))*/


interface Users {
  name: string;
  age: number;
  email: string;
}

// Complete the types of this function
function getProperty<T,U extends keyof T>(obj:T, key:U) {
  return obj[key];
}

const user:Users={
  name:'samuel',
  age:34,
  email:'samuel@gmail.com'
}

const nameOnly=getProperty(user,'name');
const emailOnly=getProperty(user,'email')
console.log(nameOnly)
console.log(emailOnly)

// 


type UserTuple =[name:string, age:number, active:boolean ] ;

function formatUserTuple(user:UserTuple) {
  const [name, age, active] = user;
  return `${name} is ${age} years old and is ${active ? "active" : "inactive"}`;
}

console.log(formatUserTuple(['samuel',22,true]))


//

// type Products={
//   name:string;
//   price:number
// }

// function calculateTotall(items:Products[]) {
//   let total = 0;
//   for (let item of items) {
//     total += item.price;
//   }
//   return total.toFixed(2);
// }

// function applyDiscountl(amount:number, discount:number) {
//   const discountedAmount = amount - (amount * discount);
//   return discountedAmount;
// }

// const productss = [
//   { name: "Laptop", price: 999 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 79 }
// ];

// const total = calculateTotall(productss);
// const discounted = applyDiscountl(total, 0.1);








// function mergeObjects<T extends object, U extends object>(obj1:T, obj2:U) {
//   return { ...obj1, ...obj2 };
// }

// function getNestedValue<T , U extends keyof T>(obj:T, path:U) {
//   const keys = path.split('.');
//   let value = obj;
//   for (let key of keys) {
//     value = value[key];
//   }
//   return value;
// }

// const person = {
//   name: "John",
//   address: {
//     street: "123 Main St",
//     city: "New York"
//   }
// };

// const updates = { age: 30, city: "Boston" };
// const merged = mergeObjects(person, updates);
// const street = getNestedValue(person, "address.street");


//
// type Products={
//   name:string;
//   price:number
// }
// function calculateTotall(items:Products[]) {
//   let total = 0;
//   for (let item of items) {
//     total += item.price;
//   }
//   return total.toFixed(2);
// }
// function applyDiscountl(amount:number, discount:number) {
//   const discountedAmount = amount - (amount * discount);
//   return discountedAmount;
// }
// const productss = [
//   { name: "Laptop", price: 999 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 79 }
// ];
// const total = calculateTotall(productss);
// const discounted = applyDiscountl(total, 0.1);
// function mergeObjects<T extends object, U extends object>(obj1:T, obj2:U) {
//   return { ...obj1, ...obj2 };
// }
// function getNestedValue<T , U extends keyof T>(obj:T, path:U) {
//   const keys = path.split('.');
//   let value = obj;
//   for (let key of keys) {
//     value = value[key];
//   }
//   return value;
// }
// const person = {
//   name: "John",
//   address: {
//     street: "123 Main St",
//     city: "New York"
//   }
// };
// const updates = { age: 30, city: "Boston" };
// const merged = mergeObjects(person, updates);
// const street = getNestedValue(person, "address.street");
//# sourceMappingURL=revision.js.map




interface Products{
  id:number,
  name:string,
  price:number

}
function indexProductsById(arr:Products[]){
  return arr[1]
}
const productss = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 }
];

const indexed = indexProductsById(productss);
console.log(indexed)


// duck-typing


interface DuckTyping{
  duck:()=>void;
}

const obj1={
  duck:()=>console.log('this is ducks'),
  name:'samuel'
}

const obj2={
  duck:()=>console.log('also successfully'),
  age:22
}

function ducking(ducks:DuckTyping){
  ducks.duck()
}

ducking(obj1)
ducking(obj2)


// 


interface Book{
  title:
}
const item: (Book | string)[] = [
  { title: "1984", isbn: "978-0451524935" },
  "Not a book",
  { title: "Brave New World", isbn: "978-0060085261s" }
];

const books = items.filter(isBook);

