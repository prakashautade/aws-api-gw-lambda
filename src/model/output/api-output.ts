import { APIGatewayProxyResult } from "aws-lambda";
import { Success } from "./success";
import { Output } from "./output";
import { Error } from "./error";

export class APIOutput implements APIGatewayProxyResult {
    statusCode: number;
    body: string;

    public ok(success: Success): APIOutput {
        this.statusCode = 200;
        this.body = JSON.stringify(success, null, 2);
        return this;
    }

    public invalidRequest(error: Error): APIOutput {
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
    public getBody(): Output {
        return JSON.parse(this.body);
    }
}