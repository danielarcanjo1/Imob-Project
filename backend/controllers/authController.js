const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
<<<<<<< HEAD


exports.register = async (req, res) => {
    const { email,userName, password, userRole } = req.body;
    console.log("ESSES SÂO OS DADOS RECEBIDOS",email,userName, password,userRole)
    const userPassword = await bcrypt.hash(password, 10);
    // const username = userName
    // const password = hashedPassword
    // const role = userRole
    try {
        User.create({ email, userName, userPassword, userRole });
=======
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
>>>>>>> 033385f7d52009a4d62fc170fd91c136515b1f18
        res.status(201).json({Message: 'User registered'});
    } catch (error) {
        res.status(500).json({Message: 'Error registering user'});
    }
};

exports.login = async (req, res) => {
<<<<<<< HEAD
    
    const { userName, userPassword } = req.body;
    console.log("ESSES SÂO OS DADOS RECEBIDOS",userName,userPassword)
    try {
       
        const user = await User.findOne({ where: { userName } });
        if (!user) {
            return res.status(400).json({
                Message: 'Usuario não encontrado!',
                data:{
                    userName: userName
                }
            });
        }

        const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                Message: 'Password invalid',
                statusCode: 401 
            });;
        }
        req.session.userId = user.id
        req.session.userName = user.username
        req.session.save(err =>{
            if(err){
                throw err;
            }
            const token = jwt.sign({ id: req.session.userId ,userName: user.userName, role: user.role }, 'SECRET_KEY');
            res.json(token);
        })
        
        
=======
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
>>>>>>> 033385f7d52009a4d62fc170fd91c136515b1f18
    
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};