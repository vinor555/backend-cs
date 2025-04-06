const express = require('express');
const router = express.Router();
const skinController = require('../controllers/skinController');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

router.get('/', cacheMiddleware, skinController.getSkins);

module.exports = router;
