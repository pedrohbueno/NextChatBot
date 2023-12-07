// userController.js

const userService = require('../services/userService');

class UserController {

  static async findUser(req, res){
    try {
        const users = await userService.findAllUsers(req, res);
        res.json(users);
      } catch (error) {
        console.error('Erro na rota de obter todos os usuários:', error);
        res.status(500).json({ error: 'Houve um erro ao obter todos os usuários.' });
      }
  }
  // Outros métodos relacionados ao usuário podem ser adicionados aqui...
}

module.exports = UserController;
