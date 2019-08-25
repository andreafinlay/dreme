import gql from 'graphql-tag';

const REGISTER = gql`
    mutation Register(
        $name: String!
        $email: String!
        $password: String!
        $id: UUID!
        $createdat: Date!
        $updatedat: Date!
    ) {
        __typename
        register(
            input: {
                name: $name
                email: $email
                password: $password
                id: $id
                createdat: $createdat
                updatedat: $updatedat
            }
        ) {
            account {
                email
                id
                name
            }
        }
    }
`;

export { REGISTER };
