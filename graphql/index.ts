import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

export const graphClient = new ApolloClient({
    uri: 'https://orbeem-landing-api.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});