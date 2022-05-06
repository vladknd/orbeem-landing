import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

export const graphClient = new ApolloClient({
    uri: 'https://orbeem-landing-api.herokuapp.com/graphql',
    // uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});