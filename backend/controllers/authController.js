const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { DATE } = require('sequelize');

exports.register = async (req, res) => {
    const { userName, userPassword, userRole } = req.body;
    console.log("ESSES SÂO OS DADOS RECEBIDOS",userName, userPassword,userRole)
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const username = userName
    const password = hashedPassword
    const role = userRole
    try {
        User.create({ username, password, role });
        res.status(201).json({Message: 'User registered'});
    } catch (error) {
        res.status(500).json({Message: 'Error registering user'});
    }
};

exports.login = async (req, res) => {
    const { userName, userPassword } = req.body;
    try {
        const user = await User.findOne({ where: { userName } });
        if (!user) {
            return res.status(400).json({Message: 'User Invalid'});
        }

        const isPasswordValid = await bcrypt.compare(userPassword, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({Message: 'Password invalid'});;
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, 'SECRET_KEY');
        res.send({ token });
    
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};