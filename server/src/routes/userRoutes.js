
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/findAll', async (req, res) => {
    UserController.findUser(req, res);
  });
// Outras rotas relacionadas ao usuário podem ser adicionadas aqui...

module.exports = router;
