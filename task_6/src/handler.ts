import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = DynamoDBDocumentClient.from(new DynamoDBClient());
const USERS_TABLE = process.env.USERS_TABLE || "Users";

interface AppSyncEvent {
  info: {
    fieldName: string;
  };
  arguments: {
    id?: string;
    name?: string;
    email?: string;
  };
}

export const handler = async (event: AppSyncEvent) => {
  const { fieldName } = event.info;
  const { id, name, email } = event.arguments;

  if (fieldName === "createUser") {
    const newUser = {
      id: uuidv4(),
      name: name!,
      email: email!,
    };

    await client.send(
      new PutCommand({ TableName: USERS_TABLE, Item: newUser })
    );
    return newUser;
  }

  if (fieldName === "getUser") {
    const result = await client.send(
      new GetCommand({
        TableName: USERS_TABLE,
        Key: { id: id! },
      })
    );
    return result.Item;
  }

  if (fieldName === "listUsers") {
    const result = await client.send(
      new ScanCommand({ TableName: USERS_TABLE })
    );
    return result.Items;
  }

  return null;
};
