
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