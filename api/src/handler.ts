import createLambdaHandler from "@fastify/aws-lambda";
import { server } from "./server";

export const handler = createLambdaHandler(server, {
  /**
   * We set this to `false` by default as we don't want to wait for the database
   * connection with MongoDB to disconnect before finishing the Lambda's
   * execution.
   */
  callbackWaitsForEmptyEventLoop: false,
});
