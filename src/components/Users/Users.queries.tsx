import gql from 'graphql-tag';

const GET_USERS = gql`
    query GetUsers {
        allUsers {
            nodes {
                name
                email
                id
            }
        }
    }
`;

export { GET_USERS };
