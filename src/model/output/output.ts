import { Entity } from "../entity/entity";
import { APIGatewayProxyResult } from "aws-lambda";
import { Error } from "./error";

export class Output implements APIGatewayProxyResult {
    statusCode: number;
    body: string;

    public ok(entity: Entity): Output {
        this.statusCode = 200;
        this.body = JSON.stringify(entity, null, 2);
        return this;
    }

    public invalidRequest(error: Error): Output {
        this.statusCode = 400;
        this.body = JSON.stringify(error, null, 2);
        return this;
    }

    /**
     * getStatusCode
     */
    public getStatusCode(): number {
        return this.statusCode;
    }

    /**
     * getBody
     */
    public getBody(): Entity {
        return JSON.parse(this.body);
    }
}