const express = require('express');
const router = express.Router();
const accessController = require('../controllers/accessController');

// Rota para adicionar um usuário
router.post('/register', async (req, res) => {
    accessController.register(req, res);
});
router.post('/login', async (req, res) => {
    accessController.login(req, res);
});
// Outras rotas relacionadas ao usuário podem ser adicionadas aqui...

module.exports = router;