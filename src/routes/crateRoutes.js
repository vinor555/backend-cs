const express = require('express');
const router = express.Router();
const crateController = require('../controllers/crateController');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

router.get('/', cacheMiddleware, crateController.getCrates);

module.exports = router;