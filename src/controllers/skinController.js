const { Skin } = require('../models');

exports.getSkins = async (req, res) => {
  try {
    const { crates } = req.query;
    if (crates) {
      const skins = await Skin.findAll();
      const filtered = skins.filter(skin => {
        if (skin.crates && Array.isArray(skin.crates)) {
          return skin.crates.some(c => c.name.toLowerCase() === crates.toLowerCase());
        }
        return false;
      });
      return res.json(filtered);
    }
    const skins = await Skin.findAll();
    res.json(skins);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener skins' });
  }
};