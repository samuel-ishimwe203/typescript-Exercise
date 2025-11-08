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
console.log(identify(200));
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
export {};
//# sourceMappingURL=enums.js.map