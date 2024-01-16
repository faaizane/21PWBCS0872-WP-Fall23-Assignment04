const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  try {
    const secretKey = '#9fcE*4tGz$LQW9@gh%jjkk';
    const decoded = jwt.verify(token, secretKey); 
    req.admin = decoded.admin;
    if (req.admin.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not authorized as an admin.' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = { authenticateAdmin };