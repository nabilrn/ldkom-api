const { Assistants, PicketSchedules, AssistantPickets } = require('../models/index');
const { isUserLogin } = require('../middleware/AuthMiddleware');

const addAssistant = async (req, res) => {
    if (!isUserLogin(req)) {
        return res.status(403).json({ error: 'User not logged in' });
    }

    const { name, id_num } = req.body;

    const idNumPattern = /^LDKOM\.\d+\.\d+$/;
    if (!id_num.match(idNumPattern)) {
        return res.status(400).json({
            error: 'ID number must be formatted as "LDKOM.number.number"',
        });
    }

    try {
        let assistant = await Assistants.findOne({ where: { id_num } });
        if (assistant) {
            return res.status(400).json({
                error: 'Assistant with this ID number already exists',
            });
        }

        assistant = await Assistants.create({ name, id_num });

        return res.status(201).json({
            message: 'Assistant created successfully',
            assistant,
        });
    } catch (error) {
        console.error('Error in addAssistant:', error.message || error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const addAssistantPicket = async (req, res) => {
    if (!isUserLogin(req)) {
        return res.status(403).json({ error: 'User not logged in' });
    }

    const { names, day } = req.body;

    if (!names || !Array.isArray(names) || names.length === 0 || !day) {
        return res.status(400).json({ error: 'names (array) and day are required' });
    }

    try {
        const picketSchedule = await PicketSchedules.findOne({ where: { day } });
        if (!picketSchedule) {
            return res.status(404).json({ error: 'Picket schedule not found' });
        }

        const assistantPickets = [];
        for (const name of names) {
            const assistant = await Assistants.findOne({ where: { name } });
            if (!assistant) {
                return res.status(404).json({ error: `Assistant not found: ${name}` });
            }

            const newAssistantPicket = await AssistantPickets.create({ id_assistant: assistant.id, id_picket: picketSchedule.id });
            assistantPickets.push(newAssistantPicket);
        }

        return res.status(201).json({
            error: false,
            message: 'AssitantPicketSchedule created successfully',
            assistantPickets,
        });
    } catch (error) {
        console.error('Error in addAssistantPicket:', error.message || error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addAssistant, addAssistantPicket };