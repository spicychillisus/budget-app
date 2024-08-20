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

    /* public generateRandomUsernames(): any[] {

        // genereate username
        // if db already has this username, generate another one
        // return username
        
        function generateUsername(firstName: string, lastName: string): string {
            
            const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
            const numbers = 1234567890;

            const newUsername: string = "";

            return newUsername;
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

        const usernameSuggestions: any[] = [];
        
        return usernameSuggestions;
    } */

    public setUsername(username: string): any {
        this.username = username;
    }

    public getUsername(): string {
        return this.username;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setPassword(password: string): any {
        this.password = password;
    }

    public getAchievements(): any[] {
        return this.achievements;
    }

    public addAchievement(achievement: any): void {
        this.achievements.push(achievement);
    }

    public getAchievementCount(): number {
        return this.achievements.length;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }

    public setBudgetAmount(budgetAmount: number): any {
        this.budgetAmount = budgetAmount;
    }

    public getBudgetAmount(): number {
        return this.budgetAmount;
    }

    public setIncome(income: number): any {
        this.income = income;
    }

    public getIncome(): number {
        return this.income;
    }

    public setBalance(balance: number): any {
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public updateAmountSpent(amount: number): any {
        this.amountSpent += amount;
    }


}