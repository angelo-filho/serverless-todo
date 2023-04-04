import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const options: DynamoDBClientConfig = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  credentials: {
    accessKeyId: "x",
    secretAccessKey: "x",
  },
};

const isOffline = () => {
  return process.env.IS_OFFLINE;
};

const client = isOffline() ? new DynamoDB(options) : new DynamoDB({});

export const document = DynamoDBDocument.from(client);
