// enums in typescript 

enum role{
    Admin,
    User,
    Guest
    }


    function getRole(user:role){
        if(user===role.Admin){
            console.log('you are allowed to enter to this site please')
        }
        else if(user===role.User){
            console.log("you are allowed to enter but there is something that you can't access")
        }
        else {
            console.log('you arn not allowed to enter here please')
        }
    }


    console.log(getRole(role.Admin))

    // 2 Example of enums

enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

    function getStatus(status:StatusCode){
        if(status===StatusCode.OK){
            return ('Request was successful')
        
        }else if(status===StatusCode.BadRequest){
            return ('Bad request please check again')
        }
        else if(status===StatusCode.Unauthorized){
            return ('You ar not allowed to access this page please')
        }
        else{
            return ('Page not found please check again')
        }
    }

    console.log(getStatus(StatusCode.BadRequest))
// generics in typescript : it allows you to create the reusable and flexible code that can work with any type which helps to maintain code and safe.

function identify<T>(value:T):T{
    return value
}

console.log(identify<number>(2090))
    
// Interface : it is way to difine the structure or shape of an object in typescript , and what is properties , methods and their types.

interface Person{
    name:string;
    age:number;
    location?:string|number
    greet():void;
}

const person1:Person={
    name:'samuel',
    age:22,
    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    },
    location:'USA',
    

}

person1.greet()

class Guest implements Person{
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(): void {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    };
    


}
const guest1=new Guest('john',34)
guest1.greet()


// Type casting :   it is way to tell the typescript compiler about the type of a variable when you have more information about the variable than the compiler does.

let something:unknown='hello world'

let leng=(something as string).length;
console.log(leng);

let input=document.getElementById('user-input') as HTMLInputElement;
input.value='hi there'                  
console.log(input.value);
