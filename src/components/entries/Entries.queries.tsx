import gql from 'graphql-tag';

const GET_ENTRIES_BY_USERID = gql`
    query GetEntriesByUserId($userId: UUID!) {
        __typename
        allEntries(condition: { userId: $userId }) {
            nodes {
                body
                title
                id
            }
        }
    }
`;

export { GET_ENTRIES_BY_USERID };
