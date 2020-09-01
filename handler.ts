import { APIGatewayProxyHandler, Context, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import { Greeting } from './result/entity/greeting';
import { Result } from './result/result';
import { Error } from './result/entity/error';

export const greeting: APIGatewayProxyHandler = async (event, _context) => {
  const result: Result = new Result();
  if (event.queryStringParameters && event.queryStringParameters.message) {
    const message: string = event.queryStringParameters.message;
    const greeting: Greeting = new Greeting(message);
    return result.ok(greeting);
  } else {
    const error: Error = new Error("Parameter message required");
    return result.invalidRequest(error);
  }
};
