import { APIGatewayProxyHandler } from "aws-lambda";
import { randomUUID } from "crypto";
import { document } from "src/utils/dynamodbClient";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  const { title, deadline } = JSON.parse(event.body);

  await document.put({
    TableName: "todos",
    Item: {
      id: randomUUID(),
      user_id,
      title,
      done: false,
      deadline: new Date(deadline),
    },
  });

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Criado com sucesso!" }),
  };
};
