const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    }
    return res.status(401).json({ message: "You are unauthorized" });
  } catch (e) {
    return res.status(401).json({ message: "You are unauthorized" });
  }
};
