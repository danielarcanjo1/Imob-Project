const express = require('express');
const sequelize = require('./config');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())


app.post('/register', authRoutes);
app.
sequelize.sync().then(() => {
    // app.listen(3000, () => {
    //     console.log('Server running on port 3000');
     app.listen(3000, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://192.168.0.202:${3000}`);   
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// const express = require('express');
// const app = express();
// const port = 3000;
// const cors = require('cors')
// app.use(express.json());
// app.use(cors())
// app.post('/register', (req, res) => {
//     const { userName, userPassword, userRole } = req.body;
//     console.log('Usuário:', userName);
//     console.log('Senha:', userPassword);
//     console.log('Autorização:', userRole);

//     res.status(200).json({ message: 'Dados recebidos com sucesso!' });
// });

// app.listen(port, '0.0.0.0', () => {
//     console.log(`Servidor rodando em http://192.168.0.202:${port}`);
// });