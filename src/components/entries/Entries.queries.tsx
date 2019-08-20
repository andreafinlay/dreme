import gql from 'graphql-tag';

const GET_ENTRIES = gql`
    query GetEntries {
        allEntries {
            nodes {
                body
                id
                title
                userId
            }
        }
    }
`;

export { GET_ENTRIES };
