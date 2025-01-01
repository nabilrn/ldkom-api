const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.js')[env];
const tamuRoutes = require('./route/index');

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// API routes
app.use('/api', tamuRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});