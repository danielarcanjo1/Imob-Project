const express = require('express');
const sequelize = require('./config');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')
<<<<<<< HEAD
const session = require('express-session')

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://127.0.0.1:56998', 
    credentials: true,
};

app.use(cors(corsOptions))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 
    }
}))

app.post('/register', authRoutes);
app.post('/login',authRoutes)
app.get('/broker',authRoutes)
=======

const app = express();
app.use(express.json());
app.use(cors())


app.post('/register', authRoutes);
app.post('/login',authRoutes)
>>>>>>> 033385f7d52009a4d62fc170fd91c136515b1f18

sequelize.sync().then(() => {
    // app.listen(3000, () => {
    //     console.log('Server running on port 3000');
     app.listen(3000, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://192.168.0.202:${3000}`);   
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

