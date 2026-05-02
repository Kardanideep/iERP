const db = require("../config/db");

const getProduct = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT content FROM products WHERE slug = "ierp" LIMIT 1');
        if (rows.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(rows[0].content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getProduct
};
