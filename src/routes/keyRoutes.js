const express = require('express');
const router = express.Router();
const keyController = require('../controllers/keyController');
const authMiddleware = require('../middlewares/authMiddleware');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

router.get('/', authMiddleware, cacheMiddleware, keyController.getKeys);

module.exports = router;