
export default class Expense {

    // expense details
    private expenseId: number;
    private userId: number;
    private username: string;
    private expenseName: string;
    private expenseAmount: number;
    private expenseDate: string;
    private expenseCategory: string;
    private expenseType: string;
    private expenseDescription: string;

    constructor() {
        // expense details
        this.expenseId = 0;
        this.userId = 0;
        this.expenseName = '';
        this.expenseAmount = 0;
        this.expenseDate = '';
        this.expenseCategory = '';
        this.expenseType = '';
        this.expenseDescription = '';
        this.username = '';
    }

    public generateId(): number {
        const id = Math.floor(Math.random() * 1000000);
        console.log(`generated id for expense ${this.expenseName}: ${id}`)
        return this.expenseId = id;
    }

    public setExpenseName(expenseName: string): any {
        this.expenseName = expenseName;
    }
}