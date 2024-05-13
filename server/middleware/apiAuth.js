// middleware/apiAuth.js
const API_KEY = process.env.API_ACCESS_KEY;
function authenticateApiKey(req, res, next) {
  const apiKey = req.query.apikey;

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      message: "API key is invalid",
    });
  }

  next();
}

module.exports = {
  authenticateApiKey,
};
