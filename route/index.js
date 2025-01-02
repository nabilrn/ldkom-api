const express = require('express');
const router = express.Router();
const { createTamu } = require('../controllers/tamuController');
const { addAssistant, addAssistantPicket, addInventory, addArticle, addUsers } = require('../controllers/adminController');
const { verifyToken, refreshToken } = require('../middleware/AuthMiddleware');
const authController = require('../controllers/authController');
const upload = require('../config/multerConfig');

// Define the route for form submission
router.post('/tamu', createTamu);

router.post('/addAssistant',verifyToken, addAssistant);

router.post('/login', authController.login);

router.post('/refresh-token', refreshToken);

router.post('/addInventory', verifyToken, addInventory);

router.post('/addPicketSchedule', verifyToken, addAssistantPicket);
router.post('/addArticle', verifyToken, upload.single('gambar'), addArticle);
router.post('/addUsers', verifyToken, addUsers);

router.get('/protected-route', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
});

module.exports = router;