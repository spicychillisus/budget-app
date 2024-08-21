

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
    private birthday: string;

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
        this.birthday = '';

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


}