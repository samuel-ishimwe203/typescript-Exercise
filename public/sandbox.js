// learn function in JavaScript
let greet;
greet = () => {
    console.log('hello again please');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(7, 9);
// type aliases
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
greetAgain({ name: 'samuel', uid: 49 });
const greetAliase = (user) => {
    console.log(`${user.name} he is from Nyagatare`);
};
greetAliase({ name: 'sameul', uid: 19 });
const greetObjAliase = (user) => {
    console.log(`${user.name} he want to sleep pe !!!`);
};
greetObjAliase({ name: 'sameul', uid: 10 });
// function Example 1
let funct;
funct = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
funct('sameul', 'hello my friend');
// Example 2
let calcu;
calcu = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calcu(10, 5, 'add'));
console.log(calcu(10, 5, 'subtract'));
// Example 3
let logDetail;
logDetail = (sam) => {
    console.log(`${sam.name} is ${sam.age} years old`);
};
logDetail({ name: 'samuel', age: 34 });
export {}
//# sourceMappingURL=sandbox.js.map