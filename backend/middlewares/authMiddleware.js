const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = jwt.verify(token, 'SECRET_KEY');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

exports.authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).send('Access denied');
    }
    next();
};
