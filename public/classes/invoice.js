export class Invoice {
    // client:string;
    // details:string;
    // amount:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    greet() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
//# sourceMappingURL=invoice.js.map