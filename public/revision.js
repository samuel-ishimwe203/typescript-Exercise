//  // Create a function that takes two numbers as parameters and returns their sum. Ensure proper type annotations for parameters and return type.
const logOrder = (order) => {
    console.log(`${order.customer.name} is Shipping to: ${order.customer.address.city}`);
};
logOrder({
    customer: {
        name: 'Jane',
        address: {
            city: 'kigali',
        },
    }
});
export {};
//# sourceMappingURL=revision.js.map