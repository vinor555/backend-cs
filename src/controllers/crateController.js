const { Crate } = require('../models');

exports.getCrates = async (req, res) => {
  try {
    const crates = await Crate.findAll();
    res.json(crates);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener crates' });
  }
};