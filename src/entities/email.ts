
export default class Email {
    
    // email writing properties
    private senderTo: string;
    private senderFrom: string;
    private subject: string;
    private emailCC: string[];
    private emailBCC: string[];
    private message: string;

    // email attachment stuff idk man
    private attachment: string;
    private attachmentName: string;

    constructor() {
        this.senderTo = '';
        this.senderFrom = '';
        this.subject = '';
        this.emailCC = [];
        this.emailBCC = [];
        this.message = '';
        this.attachment = '';
        this.attachmentName = '';
    }
}