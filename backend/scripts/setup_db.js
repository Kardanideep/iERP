require('dotenv').config();
const db = require('../config/db');
const fs = require('fs');
const path = require('path');

const setup = async () => {
  try {
    // 1. Create table
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        content JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Table 'products' created or already exists.");

    // 2. Load data from frontend
    const filePath = path.join(__dirname, '../../frontend/data/product.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const productData = JSON.parse(rawData);

    // 3. Insert or Update iERP product
    const slug = 'ierp';
    const name = 'iERP Education Ecosystem';
    
    // Check if exists
    const [rows] = await db.query('SELECT id FROM products WHERE slug = ?', [slug]);
    
    if (rows.length > 0) {
      await db.query('UPDATE products SET content = ?, name = ? WHERE slug = ?', [JSON.stringify(productData), name, slug]);
      console.log("Product 'ierp' updated.");
    } else {
      await db.query('INSERT INTO products (slug, name, content) VALUES (?, ?, ?)', [slug, name, JSON.stringify(productData)]);
      console.log("Product 'ierp' inserted.");
    }

    console.log("Database setup completed successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Setup Error:", err);
    process.exit(1);
  }
};

setup();
