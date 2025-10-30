
// learn function in JavaScript

let greet:Function;
greet=()=>{
    console.log('hello again please')
}

const add=(a:number,b:number, c:number|string=10)=>{ //you must use default or ? you must choose want you want
    console.log(a+b);
    console.log(c)

}
add(7,9);


// type aliases

const logDetails =(uid:string|number, item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greetAgain =(user:{name:string, uid:string|number})=>{
    console.log(`${user.name} says hello`)
}
greetAgain({name:'samuel',uid:49});

// now how to use aliases 

type stringOrNumb=string|number;

const greetAliase =(user:{name:string, uid:stringOrNumb})=>{
    console.log(`${user.name} he is from Nyagatare`)
}
greetAliase({name:'sameul',uid:19})

type objWithName={name:string,uid:stringOrNumb};
const greetObjAliase=(user:objWithName)=>{
    console.log(`${user.name} he want to sleep pe !!!`)
}

greetObjAliase({name:'sameul',uid:10})

// function Example 1

let funct:(a:string, b:string)=>void;
funct=(name, greeting)=>{
    console.log(`${name} says ${greeting}`)
}
funct('sameul', 'hello my friend')

// Example 2

let calcu:(numOne:number, numTwo:number, action:string)=>number;
calcu=(numOne, numTwo, action)=>{
    if(action==='add'){
        return numOne+numTwo;
    }else{
        return numOne-numTwo;
    }
}
console.log(calcu(10,5,'add'));
console.log(calcu(10,5,'subtract'));

// Example 3

let logDetail :(obj:({name:string, age:number}))=>void;

type person={name:string, age:number}

logDetail=(sam)=>{
console.log(`${sam.name} is ${sam.age} years old`)
}

logDetail({name:'samuel',age:34})