//  TypeScript class

class Invoice {
    // client:string;
    // details:string;
    // amount:number;

    constructor(
         readonly client:string,
         private details:string,
        public amount:number,
    ){}

    greet(){
return `${this.client} owns $${this.amount} for ${this.details}`
    }
}

const invoiceOne= new Invoice('samuel','kigali-nyagatare',400); 
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