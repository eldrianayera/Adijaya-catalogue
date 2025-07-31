const express = require("express");
const pool = require("../db");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY name");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get products by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM products WHERE id=$1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, image, description, category } = req.body;
    const result = await pool.query(
      `INSERT INTO products(name, price, image, description, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, price, image, description, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a new product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image, description, category } = req.body;
    const result = await pool.query(
      `UPDATE products SET name=$1, price=$2, image=$3, description=$4, category=$5 WHERE id=$6 RETURNING *`,
      [name, price, image, description, category, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`DELETE FROM products WHERE id=$1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.json({ message: "Product deleted", product: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
