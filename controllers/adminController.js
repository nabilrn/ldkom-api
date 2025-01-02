const { 
    Assistants, 
    PicketSchedules,
    AssistantPickets,  
    Barang, 
    Merk, 
    Kondisi, 
    Inventories,
    BarangKondisi,
    Artikel,
    Users
 } = require('../models/index');
const { isUserLogin } = require('../middleware/AuthMiddleware');
const upload  = require('../config/multerConfig');
const bcrypt = require('bcrypt');

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

const addInventory = async (req, res) => {
    if (!isUserLogin(req)) {
        return res.status(403).json({ error: 'User not logged in' });
    }

    const { nama, merk, kode, kondisi, catatan, jumlah } = req.body;

    try {
        let merkRecord = await Merk.findOne({ where: { merk } });
        if (!merkRecord) {
            merkRecord = await Merk.create({ merk });
        }

        let kondisiRecord = await Kondisi.findOne({ where: { kondisi } });
        if (!kondisiRecord) {
            kondisiRecord = await Kondisi.create({ kondisi });
        }

        console.log('Creating Barang with values:', {
            nama_barang: nama,
            kode_barang: kode,
            id_merk: merkRecord.id,
            id_kondisi: kondisiRecord.id,
        });

        const barang = await Barang.create({
            nama_barang: nama,
            kode_barang: kode,
            id_merk: merkRecord.id,
            id_kondisi: kondisiRecord.id,
        });

        const inventory = await Inventories.create({
            id_barang: barang.id,
            catatan,
        });

        const barangKondisi = await BarangKondisi.create({
            id_barang: barang.id,
            id_kondisi: kondisiRecord.id,
            jumlah,
        });

        return res.status(201).json({
            error: false,
            message: 'Inventory created successfully',
            inventory,
            barangKondisi,
        });
    } catch (error) {
        console.error('Error in addInventory:', error.message || error);
        if (error.errors) {
            error.errors.forEach(err => console.error(err.message));
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const addArticle = async (req, res) => {
    if (!isUserLogin(req)) {
        return res.status(403).json({ error: 'User not logged in' });
    }

    const { judul, deskripsi } = req.body;
    const gambar = req.file ? req.file.filename : null;

    try {
        const article = await Artikel.create({ judul, deskripsi, gambar });

        return res.status(201).json({
            error: false,
            message: 'Article created successfully',
            article,
        });
    } catch (error) {
        console.error('Error in addArticle:', error.message || error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const addUsers = async (req, res) => {
    if (!isUserLogin(req)) {
        return res.status(403).json({ error: 'User not logged in' });
    }

    const { username, password, role, assistant_id } = req.body;

    try {
        let user = await Users.findOne({ where: { username } });
        if (user) {
            return res.status(400).json({
                error: 'User with this username already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await Users.create({ username, password: hashedPassword, role, assistant_id });

        return res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        console.error('Error in addUsers:', error.message || error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = { addAssistant, addAssistantPicket, addInventory, addArticle, addUsers };