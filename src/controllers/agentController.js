const { Agent } = require('../models');

exports.getAgents = async (req, res) => {
  try {
    const agents = await Agent.findAll();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener agentes' });
  }
};