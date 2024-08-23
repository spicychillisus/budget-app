
export class HTTPError extends Error {

    private status: number;
    private msg: string;

    constructor(msg: string, status: number) {
        super();
        this.status = status;
        this.msg = msg;
    }

}