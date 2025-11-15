// enums in typescript 
var role;
(function (role) {
    role[role["Admin"] = 0] = "Admin";
    role[role["User"] = 1] = "User";
    role[role["Guest"] = 2] = "Guest";
})(role || (role = {}));
function getRole(user) {
    if (user === role.Admin) {
        console.log('you are allowed to enter to this site please');
    }
    else if (user === role.User) {
        console.log("you are allowed to enter but there is something that you can't access");
    }
    else {
        console.log('you arn not allowed to enter here please');
    }
}
console.log(getRole(role.Admin));
// 2 Example of enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
function getStatus(status) {
    if (status === StatusCode.OK) {
        return ('Request was successful');
    }
    else if (status === StatusCode.BadRequest) {
        return ('Bad request please check again');
    }
    else if (status === StatusCode.Unauthorized) {
        return ('You ar not allowed to access this page please');
    }
    else {
        return ('Page not found please check again');
    }
}
console.log(getStatus(StatusCode.BadRequest));
// generics in typescript : it allows you to create the reusable and flexible code that can work with any type which helps to maintain code and safe.
function identify(value) {
    return value;
}
console.log(identify(2090));
const person1 = {
    name: 'samuel',
    age: 22,
    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    },
    location: 'USA',
};
person1.greet();
class Guest {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
    ;
}
const guest1 = new Guest('john', 34);
guest1.greet();
// Type casting :   it is way to tell the typescript compiler about the type of a variable when you have more information about the variable than the compiler does.
let something = 'hello world';
let leng = something.length;
console.log(leng);
let input = document.getElementById('user-input');
input.value = 'hi there';
console.log(input.value);
;
export const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
export function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}
console.log('Users:');
users.forEach(logPerson);
// exercise 2
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User|Admin;
// export const persons: Person[] /* <- Person[] */ = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// export function logPerson(user: Person) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
// persons.forEach(logPerson);
// Exersice 3
/* Fix type errors in logPerson function.

   logPerson function should accept both User and Admin
   and should output relevant information according to
   the input: occupation for User and role for Admin.

*/
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// export function logPerson(person: Person) {
//     let additionalInformation: string;
//     if ('role'in person) {
//         additionalInformation = person.role;
//     } else {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// persons.forEach(logPerson);
// Exercise 4
/*
    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

*/
// interface User {
//     type: 'user';
//     name: string;
//     age: number;
//     occupation: string;
// }
// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//     { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
//     { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
//     { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
//     { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
// ];
// export function isAdmin(person: Person):person is Admin {
//     return person.type === 'admin';
// }
// export function isUser(person: Person):person is User {
//     return person.type === 'user';
// }
// export function logPerson(person: Person) {
//     let additionalInformation: string = '';
//     if (isAdmin(person)) {
//         additionalInformation = person.role;
//     }
//     if (isUser(person)) {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
// console.log('Admins:');
// persons.filter(isAdmin).forEach(logPerson);
// console.log();
// console.log('Users:');
// persons.filter(isUser).forEach(logPerson);
// typescript allows to change variable from one type to another type this process called type assertion.
//# sourceMappingURL=enums.js.map