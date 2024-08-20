import User from "./user";

export default class Admin extends User {

    private permissions: string[];

    constructor() {
        super();
        this.permissions = [];
    }

    public setPermission(permission: string): void {
        this.permissions.push(permission);
    }

    public getPermissions(): string[] {
        return this.permissions;
    }
    
}