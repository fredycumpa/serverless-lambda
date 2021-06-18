import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
const axios = require("axios");

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const data = await axios
    .get("https://swapi.py4e.com/api/people")
      .catch((err) => {
      console.error(err.response);
      return err.response;
    });
  
    if (data.status != 200) {
      return {
        statusCode: data.statusCode,
        body: JSON.stringify(data.statusText),
      };
    }

  return { statusCode: 200, body: JSON.stringify(data.data) };
}