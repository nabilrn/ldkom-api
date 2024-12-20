const { Mahasiswa, Kunjungan, Alasan } = require('../models/index');

const createTamu = async (req, res) => {
  const { name, nim, reason } = req.body;

  try {
    // Find or create Mahasiswa
    let mahasiswa = await Mahasiswa.findOne({ where: { nim } });
    if (!mahasiswa) {
      mahasiswa = await Mahasiswa.create({ name, nim });
    }

    // Find Alasan
    const alasan = await Alasan.findOne({ where: { reason } });
    if (!alasan) {
      return res.status(400).json({ error: 'Invalid reason' });
    }

    // Create Kunjungan
    const kunjungan = await Kunjungan.create({
      id_mhs: mahasiswa.id,
      reason: alasan.id,
      date: new Date(),
    });

    return res.status(201).json({
      message: 'Kunjungan created successfully',
      kunjungan,
    });
  } catch (error) {
    console.error('Error in createTamu:', error.message || error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createTamu };
