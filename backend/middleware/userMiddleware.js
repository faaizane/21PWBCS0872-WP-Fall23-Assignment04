
// module.exports = { authenticateUser };
const jwt = require('jsonwebtoken');

// Middleware to verify user token and role
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  try {
    // In authMiddleware.js for verifying the token
    const secretKey = '#9fcE*4tGz$LQW9!sP@u2MxY6vJjkjh';
    const decoded = jwt.verify(token, secretKey);
    // const decoded = jwt.verify(token, 'your_secret_key'); // Replace 'your_secret_key' with your actual secret key
    req.user = decoded.user;
    if (req.user.role !== 'user') {
      return res.status(403).json({ message: 'Access denied. Not authorized as a user.' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = { authenticateUser };

