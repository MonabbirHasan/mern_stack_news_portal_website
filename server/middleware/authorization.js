/* eslint-disable no-undef */
// Sample authorization middleware to check user roles or permissions
const checkUserRole = (requiredRole) => {
    return (req, res, next) => {
      const user = req.user; // Assuming user details are attached after authentication
  
      if (!user || user.role !== requiredRole) {
        return res.status(403).json({ message: 'Unauthorized. Insufficient permissions.' });
      }
  
      // User has the required role, proceed to the next middleware or route handler
      next();
    };
  };
  
 module.exports = checkUserRole;
  