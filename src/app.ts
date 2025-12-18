//  TypeScript class

interface isPerson{
    name:string,
    age:number,
    speak(a:string):void,
    spend(b:number):number;
}

const me: isPerson={
    name:'samuel',
    age:34,
    speak(text:string):void{
        console.log(text)
    },
    spend(num:number):number{
        console.log('I spent ', num)
        return num
    }

};
console.log(me)

const greet=(person:isPerson)=>{
    console.log('hello ',person.name)

}
greet(me)
console.log(me)



import { Invoice } from "./classes/invoice.js";

const invoiceOne= new Invoice('samuel','kigali-nyagatare',4000); 
const invoiceTwo= new Invoice('Elie','Gasabo-nyagatare',1000); 

let invoices:Invoice[]=[];
invoices.push(invoiceOne)
invoices.push(invoiceTwo)

console.log(invoices);


// form submission event listener

const form = document.querySelector('.new-item-form') as HTMLFormElement;
 // input 
const type= document.querySelector('#type') as HTMLSelectElement;
const toFrom= document.querySelector('#toFrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount= document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    console.log({
        type:type.value,
        toFrom:toFrom.value,
        details:details.value,
        amount: amount.valueAsNumber
    })
})