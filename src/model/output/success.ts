import { Entity } from "../entity/entity";
import { Output } from "./output";

export class Success implements Output {
    message: string;
    greeting?: Entity;
    constructor(message: string, entity: Entity) {
        this.message = message;
        this.greeting = entity;
    }

    public getMessage(): string {
       return this.message; 
    }

    public getEntity(): Entity {
        return this.greeting; 
    }
}