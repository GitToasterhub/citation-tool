const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/tasks', authMiddleware, searchController.createSearchTasks);


module.exports = router;