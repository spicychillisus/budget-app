import Achievement from "./achievement";
import Email from "./email";

export default class User {

    // user details
    private userId: string;
    private firstName: string;
    private lastName: string;
    private username: string;
    private email: Email;
    private password: string; // never release this
    private createdAt: string;
    private updatedAt: string;
    private lastLogin: string;
    private accountActive: boolean;
    private achievements: any[];
    private birthday: string;

    // money matters
    private balance: number;
    private income: number;
    private budgetAmount: number;
    private amountSpent: number;
    private dailyExpenses: any[];

    constructor() {

        // user details
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = new Email();
        this.password = '';
        this.createdAt = '';
        this.updatedAt = '';
        this.lastLogin = '';
        this.accountActive = true;
        this.achievements = [];
        this.birthday = '';

        // money matters
        this.balance = 0;
        this.income = 0;
        this.budgetAmount = 0;
        this.amountSpent = 0;
        this.dailyExpenses = [];
    }

    public generateId(): string {
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
        console.log(`generated id for ${this.username}: ${id}`)
        return id;
    }

    // forbidden method
    private getPassowrd() {
        return this.password;
    }

    public setUsername(username: string): any {
        this.username = username;
    }

    public getUsername(): string {
        return this.username;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setPassword(password: string): any {
        this.password = password;
    }

    public getAchievements(): any[] {
        return this.achievements;
    }

    public addAchievement(achievement: Achievement): void {
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

    public setEmail(email: Email): void {
        this.email = email;
    }

    public getEmail(): Email {
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

    public getAge(): number {
        let age = 0;
        const birthday = this.birthday;
        const today = new Date();
        const birthDate = new Date(birthday);
        age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log(`age of username ${this.username}: ${age}`)

        return age;
    }

    public getBirthday(): string {
        return this.birthday;
    }

    public setBirthday(birthday: string): any {
        this.birthday = birthday;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string): any {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): any {
        this.updatedAt = updatedAt;
    }

    public getAllDailyExpenses(): any[] {
        return this.dailyExpenses;
    }

    public getLastLogin(): string {
        return this.lastLogin;
    }

    public getCurrentAccountActiveState(): boolean {
        return this.accountActive;
    }


}