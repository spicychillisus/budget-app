
export default class Notification {

    private id: number;
    private title: string;
    private message: string;
    private notifcationType: string;
    private timestamp: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.message = '';
        this.notifcationType = '';
        this.timestamp = '';
    }

    public markAsRead(): void {

    }

    public closeNotification(): void {
        
    }
    
    
}