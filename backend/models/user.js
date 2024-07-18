const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
<<<<<<< HEAD
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
=======
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
>>>>>>> 033385f7d52009a4d62fc170fd91c136515b1f18
        type: DataTypes.ENUM,
        values: ['admin', 'management', 'broker'],
        allowNull: false
    }
}, {
    tableName: 'Users'
});

module.exports = User;