//  // Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total.toFixed(2);
}
function applyDiscount(amount, discount) {
    const discountedAmount = amount - (amount * discount);
    return Number(discountedAmount.toFixed(2));
}
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 79 }
];
const total = calculateTotal(products);
//
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["InActive"] = "Inactive";
    Status["Pending"] = "pending";
})(Status || (Status = {}));
function getStatusMessage(status) {
    // Your code here
    return `the process is :${status}`;
}
console.log(getStatusMessage(Status.InActive));
// 
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(applyOperation(5, 10, add));
console.log(applyOperation(5, 10, multiply));
function processValue(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (typeof value === 'number') {
        console.log(value * 2);
    }
    else {
        return -value;
    }
}
processValue('hello');
processValue(5);
console.log(processValue(true));
// 
function move(direction) {
    switch (direction) {
        case "north":
            return { x: 0, y: 1 };
        case "south":
            return { x: 0, y: -1 };
        case "east":
            return { x: 1, y: 0 };
        case "west":
            return { x: -1, y: 0 };
    }
}
console.log(move("north"));
// 
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
const response = {
    data: {
        data: 'success',
        age: 436
    },
    isError: true
};
console.log(response);
const items = [
    { title: "1984", isbn: "978-0451524935" },
    "Not a book",
    { title: "Brave New World", isbn: "978-0060085261" }
];
function isBook(value) {
    return value;
}
const books = items.filter(isBook);
console.log(books);
// Complete the types of this function
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    name: 'samuel',
    age: 34,
    email: 'samuel@gmail.com'
};
const nameOnly = getProperty(user, 'name');
const emailOnly = getProperty(user, 'email');
console.log(nameOnly);
console.log(emailOnly);
function formatUserTuple(user) {
    const [name, age, active] = user;
    return `${name} is ${age} years old and is ${active ? "active" : "inactive"}`;
}
console.log(formatUserTuple(['samuel', 22, true]));
function indexProductsById(arr) {
    return arr[0];
}
const productss = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 }
];
const indexed = indexProductsById(produc);
console.log(indexed);
export {};
//# sourceMappingURL=revision.js.map