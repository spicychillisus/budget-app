import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class User {

    // user details
    private userId: number;
    private firstName: string;
    private lastName: string;
    private username: string;
    private email: string;
    private password: string; // never release this
    private createdAt: string;
    private updatedAt: string;
    private lastLogin: string;
    private accountActive: boolean;
    private achievements: any[];

    // money matters
    private balance: number;
    private income: number;
    private budgetAmount: number;
    private amountSpent: number;

    constructor() {

        // user details
        this.userId = 0;
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.createdAt = '';
        this.updatedAt = '';
        this.lastLogin = '';
        this.accountActive = true;
        this.achievements = [];

        // money matters
        this.balance = 0;
        this.income = 0;
        this.budgetAmount = 0;
        this.amountSpent = 0;
    }

    public generateId(): number {
        const id = Math.floor(Math.random() * 1000000);
        console.log(`generated id for user ${this.username}: ${id}`)
        return this.userId = id;
    }

    public generateRandomUsername(): string {

        // genereate username
        // if db already has this username, generate another one
        // return username
        
        function generateUsername(firstName: string, lastName: string): string {
            
            const additionalNames = [""];

            return firstName + lastName;
        }

        async function getAllUsernames() {
            const allUsernames = await prisma.users.findMany({
                select: {
                    id: true,
                    username: true
                }
            })

            return allUsernames;
        }

        const newUsername = generateUsername(this.firstName, this.lastName);
        const existingUsernames = getAllUsernames();
        console.log(existingUsernames);
        
        return this.username = newUsername;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getUsername(): string {
        return this.username;
    }

    public getAchievements(): any {
        return this.achievements;
    }


}