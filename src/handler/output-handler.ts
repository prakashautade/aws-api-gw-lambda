import { Entity } from "../model/entity/entity";
import { Success } from "../model/output/success";
import { Error } from "../model/output/error";
import { APIOutput } from "../model/output/api-output";

export class APIOutputHandler {
    public buildOk(entity: Entity): APIOutput {
        const success: Success = new Success("OK", entity);
        const apiOutput: APIOutput = new APIOutput();
        apiOutput.ok(success);
        return apiOutput;
    }

    public buildInvalidInput(message: string): APIOutput {
        const error: Error = new Error(message);
        const apiOutput: APIOutput = new APIOutput();
        apiOutput.invalidRequest(error);
        return apiOutput;
    }
}