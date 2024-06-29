const express = require('express');
const sequelize = require('./config');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())


app.post('/register', authRoutes);
app.post('/login',authRoutes)

sequelize.sync().then(() => {
    // app.listen(3000, () => {
    //     console.log('Server running on port 3000');
     app.listen(3000, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://192.168.0.202:${3000}`);   
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

