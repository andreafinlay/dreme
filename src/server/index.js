const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const posts = require('./routes/posts');
const schema = require('./schema');

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP(() => ({
        schema: schema,
        rootValue: posts,
        graphiql: true,
    }))
);

const port = process.env.PORT || 4000;

app.listen(port);

console.log(`Running at localhost:${port}/graphql`);
