import gql from 'graphql-tag';

const REGISTER = gql`
    mutation Register($name: String!, $email: String!, $password: String!, $id: UUID!) {
        __typename
        register(input: { name: $name, email: $email, password: $password, id: $id }) {
            account {
                email
                id
                name
            }
        }
    }
`;

export { REGISTER };
