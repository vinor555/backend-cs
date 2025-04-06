const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

router.get('/', cacheMiddleware, agentController.getAgents);

module.exports = router;