//  // Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
const user = { id: 1,
    name: 'samuel',
    email: 'samue@gmail.com',
    createAt: "sss",
};
const publicUser = user; // Should work, password is optional
const preview = { id: 1, name: "Alice", email: "alice@example.com" };
console.log(publicUser);
console.log(preview);
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
export {};
//# sourceMappingURL=revision.js.map