const { Builder } = require('xml2js');
const { Skin, Agent, Crate, Key } = require('../models');

exports.exportToXML = async (req, res) => {
  try {
    const { type } = req.query;
    let data;
    switch(type) {
      case 'skins':
        data = { items: { skin: await Skin.findAll() } };
        break;
      case 'agents':
        data = { items: { agent: await Agent.findAll() } };
        break;
      case 'crates':
        data = { items: { crate: await Crate.findAll() } };
        break;
      case 'keys':
        data = { items: { key: await Key.findAll() } };
        break;
      default:
        return res.status(400).json({ error: 'Tipo inválido para exportación XML' });
    }
    
    const builder = new Builder();
    const xml = builder.buildObject(data);
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).json({ error: 'Error al exportar a XML' });
  }
};