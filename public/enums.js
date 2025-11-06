// enums in typescript 
var role;
(function (role) {
    role[role["Admin"] = 0] = "Admin";
    role[role["User"] = 1] = "User";
    role[role["Guest"] = 2] = "Guest";
})(role || (role = {}));
function getRole(user) {
    if (user === role.Admin) {
        console.log('you are allowed to enter to this site');
    }
    else if (user === role.User) {
        console.log("you are allowed to enter but there is something that you can't access");
    }
    else {
        console.log('you arn not allowed to enter here please');
    }
}
console.log(getRole(role.Admin));
export {};
//# sourceMappingURL=enums.js.map