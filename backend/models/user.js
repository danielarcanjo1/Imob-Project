const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'management', 'broker'],
        allowNull: false
    }
}, {
    tableName: 'Users'
});

module.exports = User;