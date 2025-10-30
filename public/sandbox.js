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
export {};
//# sourceMappingURL=sandbox.js.map