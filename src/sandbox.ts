
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