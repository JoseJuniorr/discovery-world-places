import envVars from 'envVars';
import { GraphQLClient } from 'graphql-request';

const endpoint = envVars.HYGRAPH_URL;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${envVars.HYGRAPH_TOKEN}`
  }
});

export default client;
