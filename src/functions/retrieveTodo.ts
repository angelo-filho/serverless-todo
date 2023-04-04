import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  return {
    statusCode: 201,
    body: JSON.stringify({ hello: "world" }),
  };
};
