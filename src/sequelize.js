const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

const User = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: Sequelize.STRING,
        },
        createdat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    { timestamps: false }
);

const Entry = sequelize.define(
    'entry',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
        },
        body: {
            type: Sequelize.TEXT,
        },
        userId: {
            type: Sequelize.UUID,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        createdat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    { timestamps: false }
);

User.hasMany(Entry);

User.sync({ force: true }).then(() => {
    Entry.sync({ force: true }).then(() => {
        return Entry.create({
            title: 'A Prolegamena To An Emancipatory Theory Of Time',
            body: 'poo poo pee pee',
        });
    });
});
