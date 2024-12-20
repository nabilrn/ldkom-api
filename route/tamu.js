const express = require('express');
const router = express.Router();
const { createTamu } = require('../controllers/tamuController');


// Define the route for form submission
router.post('/tamu', createTamu);

module.exports = router;
