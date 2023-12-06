// userController.js

const UserService = require('../services/userService');

class UserController {
  static async addUser(req, res) {
    const { name_user, email_user, pfp_user, pass_user, conf_pass_user } = req.body;

    try {
      const result = await userService.addUser(name_user, email_user, pfp_user, pass_user, conf_pass_user);

      if (result.success) {
        res.json({ token: result.token });
      } else {
        res.status(400).json({ error: result.error });
      }
    } catch (error) {
      console.error('Erro no controlador ao adicionar usuário:', error);
      res.status(500).json({ error: 'Houve um erro ao adicionar o usuário.' });
    }
  }

  static async findUser(req, res){
    try {
        const users = await UserService.findAllUsers(req, res);
        res.json(users);
      } catch (error) {
        console.error('Erro na rota de obter todos os usuários:', error);
        res.status(500).json({ error: 'Houve um erro ao obter todos os usuários.' });
      }
  }
  // Outros métodos relacionados ao usuário podem ser adicionados aqui...
}

module.exports = UserController;
