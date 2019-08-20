import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
    mutation GetCurrentUser($token: String!, $secret: String!) {
        __typename
        currentUserId(input: { token: $token, secret: $secret }) {
            uuid
        }
    }
`;

export { GET_CURRENT_USER };
