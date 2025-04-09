import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const getUsers: APIGatewayProxyHandler = async () => {
  try {
    const result = await docClient.send(
      new ScanCommand({ TableName: process.env.USERS_TABLE })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ users: result.Items }),
    };
  } catch (error) {
    console.error("❌ Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to fetch users" }),
    };
  }
};
