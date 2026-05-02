const express = require('express');
const cors = require('cors');
const app = express();

require("dotenv").config();
require("./config/db");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/productRoutes"));

app.listen(5000, () => {
    console.log('Server started on port 5000');
});