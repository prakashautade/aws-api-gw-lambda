import { APIGatewayProxyHandler, Context, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import { APIOutput } from '../model/output/api-output';
import { Greeting } from '../model/entity/greeting';
import { APIInput } from '../model/input/api-input';
import { InputHandler } from '../handler/input-handler';
import { APIOutputHandler } from '../handler/output-handler';
import { GreetingService } from '../service/greeting/greeting';

export const greeting: APIGatewayProxyHandler = async (event, _context) => {
  const inputHandler: InputHandler = new InputHandler(event);
  const outputHandler: APIOutputHandler = new APIOutputHandler();
  try {
    const apiInput: APIInput = inputHandler.getAPIInput();
    const greetingService: GreetingService = new GreetingService(apiInput);
    const greeting: Greeting = greetingService.getGreeting();
    const apiOutput: APIOutput = outputHandler.buildOk(greeting);
    return apiOutput;    
  } catch (error) {
    const apiOutput: APIOutput = outputHandler.buildInvalidInput("Parameter message required");
    return apiOutput;
  }
};
