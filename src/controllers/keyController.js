const { Key } = require('../models');

exports.getKeys = async (req, res) => {
  try {
    const keys = await Key.findAll();
    res.json(keys);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener keys' });
  }
};