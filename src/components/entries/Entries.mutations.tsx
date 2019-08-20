import gql from 'graphql-tag';

const CREATE_ENTRY = gql`
    mutation CreateEntry($id: UUID!, $title: String!, $body: String!, $userId: UUID!) {
        __typename
        createEntry(input: { entry: { id: $id, title: $title, body: $body, userId: $userId } }) {
            entry {
                id
                body
                title
                userId
            }
        }
    }
`;

export { CREATE_ENTRY };
