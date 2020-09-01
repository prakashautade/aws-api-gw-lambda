import { Entity } from "./entity/entity";
import { APIGatewayProxyResult } from "aws-lambda";

export class Result implements APIGatewayProxyResult {
    statusCode: number;
    body: string;

    public ok(entity: Entity): Result {
        this.statusCode = 200;
        this.body = JSON.stringify(entity, null, 2);
        return this;
    }

    public invalidRequest(errorMessae: string): Result {
        this.statusCode = 400;
        this.body = JSON.stringify({message: errorMessae}, null, 2);
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
    public getBody(): string {
        return this.body;
    }
}