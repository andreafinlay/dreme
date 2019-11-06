import gql from 'graphql-tag';

const CREATE_ENTRY = gql`
    mutation CreateEntry(
        $id: UUID!
        $title: String!
        $body: String!
        $userId: UUID!
        $createdat: Datetime!
        $updatedat: Datetime!
    ) {
        __typename
        createEntry(
            input: {
                entry: {
                    id: $id
                    title: $title
                    body: $body
                    userId: $userId
                    createdat: $createdat
                    updatedat: $updatedat
                }
            }
        ) {
            entry {
                id
            }
        }
    }
`;

export { CREATE_ENTRY };
