import { APIGatewayProxyHandler, Context, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import { Greeting } from './response/entity/greeting';
import { Result } from './response/result';

export const greeting: APIGatewayProxyHandler = async (event, _context) => {
  const result: Result = new Result();
  if (event.queryStringParameters && event.queryStringParameters.message) {
    const message: string = event.queryStringParameters.message;
    const greeting: Greeting = new Greeting(message);
    return result.ok(greeting);
  } else {
    return result.invalidRequest("Parameter message required");
  }
};
