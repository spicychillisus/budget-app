
export default class Achievement {

    private name: string;
    private description: string;
    private date: string;
    private userId: number;
    private achievementId: number;
    private username: string;
    private type: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.date = '';
        this.userId = 0;
        this.username = '';
        this.type = '';
        this.achievementId = 0;
    }

    public getAchievementName(): string {
        return this.name;
    }

    public setAchievementName(name: string): any {
        this.name = name;
    }

    public generateAchievementId(): number {
        const id = Math.floor(Math.random() * 1000000);
        console.log(`generated id for achievement ${this.name}: ${id}`)
        return this.achievementId = id;
    }

    public setAchievementDescription(description: string): any {
        this.description = description;
    }

    public getAchievementDescription(): string {
        return this.description;
    }

    public setAchievementDate(date: string): any {
        this.date = date;
    }

    public getAchievementDate(): string {
        return this.date;
    }

    public setUserId(userId: number): any {
        this.userId = userId;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUsername(username: string): any {
        this.username = username;
    }

    public getUsername(): string {
        return this.username;
    }

    public setAchievementType(type: string): any {
        this.type = type;
    }

    public getAchievementType(): string {
        return this.type;
    }

    public getAchievementId(): number {
        return this.achievementId;
    }

    public setAchievementId(achievementId: number): any {
        this.achievementId = achievementId;
    }

    public getAchievement(): any {
        const achievement = {
            name: this.name,
            description: this.description,
            date: this.date,
            userId: this.userId,
            achievementId: this.achievementId,
            username: this.username,
            type: this.type
        }

        return achievement;
    }


}