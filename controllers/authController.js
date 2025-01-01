require('dotenv').config();
const { Users, Assistants } = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await Users.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });

        user.refreshToken = refreshToken;
        await user.save();

        let assistantData = null;
        if (user.role === 'assistant') {
            const assistant = await Assistants.findOne({ where: { id: user.assistant_id } });
            if (assistant) {
                assistantData = {
                    name: assistant.name,
                    id_num: assistant.id_num,
                };
            }
        }

        return res.status(200).json({
            error: false,
            message: 'Login successful',
            token,
            refreshToken,
            role: user.role,
            assistantData,
        });
    } catch (error) {
        console.error('Error in login:', error.message || error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login,
};