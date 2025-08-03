const express = require("express");
const pool = require("../db");
const jwt = require("jsonwebtoken");
const { isAdmin, isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.get("/validate", isAuthenticated, isAdmin, (req, res) => {
  res.json({ valid: true, user: req.user });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username=$1 AND password=$2",
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Wrong username or password" });
    }

    const user = result.rows[0];

    // create Token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
