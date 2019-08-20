import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
});

// TODO: token is not set unless successfully logged in; if no existing token, unable to log in 403
// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('authBody');

//     return {
//         headers: {
//             ...headers,
//             Authorization: token ? `Bearer ${token}` : '',
//         },
//     };
// });

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
