const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const postsSchema = buildASTSchema(gql`
    type Query {
        posts: [Post]
        post(id: ID!): Post
    }

    type Post {
        id: ID
        author: String
        body: String
    }
`);

module.exports = postsSchema;
