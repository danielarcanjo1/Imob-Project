const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userRole: {
        type: DataTypes.ENUM,
        values: ['admin', 'management', 'broker'],
        allowNull: false
    }
}, {
    tableName: 'Users'
});

module.exports = User;