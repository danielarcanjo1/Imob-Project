const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

<<<<<<< HEAD

=======
>>>>>>> 033385f7d52009a4d62fc170fd91c136515b1f18
router.get('/admin', authMiddleware.authenticate, authMiddleware.authorize(['admin']), (req, res) => {
    res.send('Welcome Admin');
});

router.get('/management', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'management']), (req, res) => {
    res.send('Welcome Management');
});

router.get('/broker', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'management', 'broker']), (req, res) => {
    res.send('Welcome Broker');
});

module.exports = router;
