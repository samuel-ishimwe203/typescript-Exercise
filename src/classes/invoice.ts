


export class Invoice {
    // client:string;
    // details:string;
    // amount:number;
,
    constructor(
         readonly client:string,
         private details:string,
        public amount:number,
    ){}

    greet(){
return `${this.client} owns $${this.amount} for ${this.details}`
    }
}