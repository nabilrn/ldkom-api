require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ error: 'Malformed token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            console.error('Token:', token);
            console.error('Secret:', process.env.JWT_SECRET);
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }

        req.userId = decoded.id;
        next();
    });
};

const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(403).json({ error: 'No refresh token provided' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        const user = await Users.findOne({ where: { id: decoded.id, refreshToken } });

        if (!user) {
            return res.status(403).json({ error: 'Invalid refresh token' });
        }

        const newToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const newRefreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });

        user.refreshToken = newRefreshToken;
        await user.save();

        return res.status(200).json({
            message: 'Token refreshed successfully',
            token: newToken,
            refreshToken: newRefreshToken,
        });
    } catch (err) {
        console.error('Refresh token error:', err);
        return res.status(500).json({ error: 'Failed to authenticate refresh token' });
    }
};

const isUserLogin = (req) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return false;
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return false;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return !!decoded;
    } catch (err) {
        console.error('isUserLogin token verification error:', err);
        return false;
    }
};

module.exports = {
    verifyToken,
    refreshToken,
    isUserLogin
};