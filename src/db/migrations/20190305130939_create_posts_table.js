exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('posts').then(function(exists) {
            if (!exists) {
                return knex.schema.createTable('posts', function(t) {
                    t.increments('id');
                    t.string('author');
                    t.string('body');
                });
            }
        }),
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([knex.schema.dropTableIfExists('posts')]);
};
