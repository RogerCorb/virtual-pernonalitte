// userRoutes.js
const express = require('express');
const router = express();
const userController = require('../controllers/userControllers');

// Rota para a página inicial
router.get('/index.html', userController.renderIndex);

module.exports = router;
