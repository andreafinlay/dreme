import gql from 'graphql-tag';

const GET_ENTRIES_BY_USERID = gql`
    query GetEntriesByUserId($userId: UUID!) {
        __typename
        allEntries(orderBy: CREATEDAT_DESC, condition: { userId: $userId }) {
            nodes {
                body
                title
                id
                createdat
            }
        }
    }
`;

export { GET_ENTRIES_BY_USERID };
