import { Entity } from "./entity";

export class Error implements Entity {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    public getMessage(): string {
       return this.message; 
    }
}