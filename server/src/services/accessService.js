// AccessService.js

const Access = require('../models/accessModel');
const bcrypt = require('bcrypt');

class AccessService {
  static async register(name, email, pass, confirmPass) {
    try {
      // Verificar se a senha é igual à confirmação de senha
      if (pass !== confirmPass) {
        return { error: 'A senha e a confirmação de senha não são iguais.' };
      }

      // Criptografar a senha
      const hashedPass = await bcrypt.hash(pass, 10);

      // Verificar se o email já está cadastrado
      const existingUser = await Access.findOne({
        attributes: ['pk_id_user', 'email_user', 'pass_user'],
        where: { email_user: email },
      });

      if (existingUser) {
        return { error: 'Email já cadastrado.' };
      }

      // Criar o usuário no banco de dados
      const newUser = await Access.create({
        name_user: name,
        email_user: email,
        pass_user: hashedPass
      });

      return { success: true, newUser };
    } catch (error) {
      console.error('Erro na criação do usuário:', error);
      return { error: 'Houve um erro na criação do usuário.' };
    }
  }

  static async login( email, pass) {
    try {
      // Verificar se o email já está cadastrado
      const existingUser = await Access.findOne({
        attributes: ['pk_id_user', 'email_user', 'pass_user'],
        where: { email_user: email },
      });

      if (!existingUser) {
        return { error: 'Email não registrado.' };
      }
      return new Promise((resolve, reject) => {
        bcrypt.compare(pass, existingUser.pass_user, function(err, result) {
          if (result) {
            console.log('Resultado', existingUser);
            resolve({ success: true, existingUser });
          } else {
            console.error('Erro:', err);
            reject({ error: 'Senha incorreta.' });
          }
        });
      });


    } catch (error) {
      console.error('Erro no login do usuário:', error);
      return { error: 'Houve um erro no login do usuário.' };
    }
  }

  // Outros métodos relacionados ao usuário podem ser adicionados aqui...

}

module.exports = AccessService;
