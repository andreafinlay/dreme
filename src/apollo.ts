import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
});

// TODO: token is not set unless successfully logged in; if no existing token, unable to log in; 403
// figure out how to grant permissions on auth function to anonymous users
// https://github.com/graphile/postgraphile/blob/master/TROUBLESHOOTING.md

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('token'); - doesn't work
//     const token = [hardcoded valid token] - works
//
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
