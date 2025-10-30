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
greetAgain({ name: 'samuel', uid: 59 });
export {};
//# sourceMappingURL=sandbox.js.map