import { APIInput } from "../../model/input/api-input";
import { Greeting } from "../../model/entity/greeting";

export class GreetingService {

    private apiInput: APIInput;

    constructor(apiInput: APIInput) {
        this.apiInput = apiInput;
    }

    /**
     * name
     */
    public getGreeting(): Greeting {
        const greeting: Greeting = new Greeting(this.apiInput.getMessage());
        return greeting;
    }
}