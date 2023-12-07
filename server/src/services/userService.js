// userService.js

const User = require('../models/userModel');
class UserService {
  static async findAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      throw error; // Você pode lidar com o erro de maneira adequada para sua aplicação
    }
  }

  // Outros métodos relacionados ao usuário podem ser adicionados aqui...

}

module.exports = UserService;
