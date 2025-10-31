//  TypeScript class
class Invoice {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    greet() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('samuel', 'kigali-nyagatare', 400);
const invoiceTwo = new Invoice('Elie', 'Gasabo-nyagatare', 1000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
// form submission event listener
const form = document.querySelector('.new-item-form');
// input 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({
        type: type.value,
        toFrom: toFrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    });
});
export {};
//# sourceMappingURL=app.js.map