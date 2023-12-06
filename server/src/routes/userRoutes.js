
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rota para adicionar um usuário
router.post('/add', async (req, res) => {
  UserController.addUser(req, res);
});
router.get('/findAll', async (req, res) => {
    UserController.findUser(req, res);
  });
// Outras rotas relacionadas ao usuário podem ser adicionadas aqui...

module.exports = router;
