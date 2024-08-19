import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class User {

    private id: number;
    private firstName: string;
    private lastName: string;
    private username: string;
    private email: string;
    private password: string; // never release this
    private createdAt: string;
    private updatedAt: string;
    private accountActive: boolean;
    private badges: any[];

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.createdAt = '';
        this.updatedAt = '';
        this.accountActive = true;
        this.badges = [];
    }

    public generateId(): number {
        const id = Math.floor(Math.random() * 1000000);
        console.log(`generated id for user ${this.username}: ${id}`)
        return this.id = id;
    }

    public generateRandomUsername(): string {

        // genereate username
        // if db already has this username, generate another one
        // return username
        
        function generateUsername(firstName: string, lastName: string): string {
            
            const extraNames = [];

            return firstName;
        }

        async function getAllUsernames() {
            const allUsernames = await prisma.users.findMany({
                select: {
                    username: true
                }
            })

            return allUsernames;
        }

        const newUsername = generateUsername(this.firstName, this.lastName);
        
        return this.username = newUsername;
    }

    public getId(): number {
        return this.id;
    }

    public getAccountStatus(): boolean {
        return this.accountActive;
    }


}