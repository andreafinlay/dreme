import gql from 'graphql-tag';

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        __typename
        authenticate(input: { email: $email, password: $password }) {
            jwtToken
        }
    }
`;

export { LOGIN };
