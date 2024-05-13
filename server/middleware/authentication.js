// Function to verify the API key
function isValidApiKey(apiKey) {
  return apiKey === process.env.API_ACCESS_KEY
}

module.exports = (req, res, next) => {
  const apiKey = req.header("Authorization");

  if (apiKey) {
    // If the request includes an API key, proceed with API key verification
    if (isValidApiKey(apiKey)) {
      req.apiKey = apiKey;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized - Invalid credentials", key: process.env.API_ACCESS_KEY });
    }
  } else {
    // If API key is not provided, send a 401 Unauthorized response
    res.status(401).json({ message: "Unauthorized - API key not provided" });
  }
};
