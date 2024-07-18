const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.register = async (req, res) => {
    const { email,userName, password, userRole } = req.body;
    console.log("ESSES SÂO OS DADOS RECEBIDOS",email,userName, password,userRole)
    const userPassword = await bcrypt.hash(password, 10);
    // const username = userName
    // const password = hashedPassword
    // const role = userRole
    try {
        User.create({ email, userName, userPassword, userRole });
        res.status(201).json({Message: 'User registered'});
    } catch (error) {
        res.status(500).json({Message: 'Error registering user'});
    }
};

exports.login = async (req, res) => {
    
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
        
        
    
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};