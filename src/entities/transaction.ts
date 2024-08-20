import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
}