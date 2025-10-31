//  TypeScript class
const me = {
    name: 'samuel',
    age: 34,
    speak(text) {
        console.log(text);
    },
    spend(num) {
        console.log('I spent ', num);
        return num;
    }
};
console.log(me);
const greet = (person) => {
    console.log('hello ', person.name);
};
greet(me);
console.log(me);
import { Invoice } from "./classes/invoice.js";
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
//# sourceMappingURL=app.js.map