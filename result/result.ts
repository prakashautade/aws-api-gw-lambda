import { Entity } from "./entity/entity";
import { APIGatewayProxyResult } from "aws-lambda";
import { Error } from "./entity/error";

export class Result implements APIGatewayProxyResult {
    statusCode: number;
    body: string;

    public ok(entity: Entity): Result {
        this.statusCode = 200;
        this.body = JSON.stringify(entity, null, 2);
        return this;
    }

    public invalidRequest(error: Error): Result {
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