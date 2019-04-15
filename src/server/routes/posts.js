const knex = require('knex');

const knexFile = require('../knexFile');

const ENV = process.env.ENV || 'development';
const knexConfig = knex(knexFile[ENV]);

const fetchPosts = () => {
    return knexConfig
        .select('*')
        .from('posts')
        .then(results => {
            return results;
        });
};

const mapPost = (post, id) => post && { id, ...post };

const posts = {
    posts: () => fetchPosts().map(mapPost),
    post: ({ id }) => mapPost(fetchPosts()[id], id),
};

module.exports = posts;
