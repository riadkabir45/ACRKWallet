const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS to allow requests from React
app.use(express.json()); // Allow parsing of JSON bodies

// simple route
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Express backend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});