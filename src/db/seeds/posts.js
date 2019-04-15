exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('posts').insert([
                { author: 'Father', body: 'hello' },
                { author: 'Son', body: 'henlo' },
                { author: 'HolySpirit', body: 'hi' },
            ]);
        });
};
