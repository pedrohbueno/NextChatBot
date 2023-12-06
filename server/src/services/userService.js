// userService.js

const User = require('../models/userModel');
const bcrypt = require('bcrypt');

class UserService {
  static async addUser(name, email, password, confirmPassword) {
    try {
      // Verificar se a senha é igual à confirmação de senha
      if (password !== confirmPassword) {
        return { error: 'A senha e a confirmação de senha não são iguais.' };
      }

      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Verificar se o email já está cadastrado
      const existingUser = await User.findOne({
        attributes: ['pk_id_user', 'email_user', 'pass_user'],
        where: { email_user: email },
      });

      if (existingUser) {
        return { error: 'Email já cadastrado.' };
      }

      // Criar o usuário no banco de dados
      const newUser = await User.create({
        name_user: name,
        email_user: email,
        pass_user: hashedPassword
      });

      return { success: true, newUser };
    } catch (error) {
      console.error('Erro na criação do usuário:', error);
      return { error: 'Houve um erro na criação do usuário.' };
    }
  }

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
