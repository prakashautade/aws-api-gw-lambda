import { APIGatewayProxyEvent } from "aws-lambda";
import { APIInput } from "../model/input/api-input";

export class InputHandler {
    private apiGatewayProxyEvent: APIGatewayProxyEvent;

    constructor(apiGatewayProxyEvent: APIGatewayProxyEvent) {
        this.apiGatewayProxyEvent = apiGatewayProxyEvent;
    }

    /**
     * getAPIInput
     */
    public getAPIInput() {
        if (this.apiGatewayProxyEvent.queryStringParameters && this.apiGatewayProxyEvent.queryStringParameters) {
            return new APIInput(this.apiGatewayProxyEvent.queryStringParameters.message);        
        }
        throw new Error('Required query string parameter message');
    }
} 