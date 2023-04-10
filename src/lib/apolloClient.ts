// src/lib/apolloClient.ts

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Replace 'YOUR_GRAPHQL_API_URL' with your GraphQL API URL
const API_URL = 'YOUR_GRAPHQL_API_URL';

const httpLink = new HttpLink({
  uri: API_URL,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
