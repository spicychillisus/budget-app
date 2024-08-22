

export default class Transaction {
    
    private transactionId: number;
    private userId: number;
    private username: string;
    private transactionName: string;
    private transactionType: string;
    private transactionAmount: number;
    private transactionDate: string;
    private transactionDescription: string;
    private createdAt: string;
    private updatedAt: string;

    constructor() {
        this.transactionId = 0;
        this.userId = 0;
        this.username = '';
        this.transactionName = '';
        this.transactionType = '';
        this.transactionAmount = 0;
        this.transactionDate = '';
        this.transactionDescription = '';
        this.createdAt = '';
        this.updatedAt = '';
    }

    public getTransactionName(): string {
        return this.transactionName;
    }

    public generateTransactionId(): any {

        // format: 3 letters (can be upper and lower) + 3 numbers
        // example: a349Bq, A24bQ5, etc.
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';

        // randomise
        const randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
        const randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
        const randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
        const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
        const randomNumber3 = numbers[Math.floor(Math.random() * numbers.length)];

        // generate
        const id = randomLowercase + randomNumber1 + randomUppercase + randomNumber2 + randomNumber3;
        console.log(`generated id for transaction ${this.transactionName}: ${id}`)
    }
}