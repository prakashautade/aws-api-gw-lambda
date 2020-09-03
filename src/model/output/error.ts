import { Output } from "./output";

export class Error implements Output {
    message: string;
    error: string;
    constructor(error: string) {
        this.message = "FAILED";
        this.error = error;
    }

    public getMessage(): string {
       return this.message; 
    }

    public getError(): string {
        return this.error; 
     }
}