import gql from 'graphql-tag';

const CREATE_USER = gql`
    mutation CreateUser(
        $name: String!
        $createdAt: Datetime!
        $updatedAt: Datetime!
        $email: String!
        $id: UUID!
    ) {
        __typename
        createUser(
            input: {
                user: {
                    name: $name
                    email: $email
                    id: $id
                    createdAt: $createdAt
                    updatedAt: $updatedAt
                }
            }
        ) {
            user {
                name
                email
                id
            }
        }
    }
`;

export { CREATE_USER };
