// userController.js

const accessService = require('../services/accessService');

class accessController {
  static async register(req, res) {
    const { name_user, email_user, pass_user, conf_pass_user } = req.body;
    console.log('Cadastro Dados:', name_user, email_user, pass_user, conf_pass_user)
    if ( name_user && email_user && pass_user && conf_pass_user ) {
      try {
        const result = await accessService.register(name_user, email_user, pass_user, conf_pass_user);
  
        if (result && result.success) {
          res.sendStatus(200)
        } else {
          res.status(400).json({ error: result.error });
        }
      } catch (error) {
        console.error('Erro no controlador ao adicionar usuário:', error);
        res.status(500).json({ error: 'Houve um erro ao adicionar o usuário.' });
      }
    }
    
  }
  static async login(req, res) {
    const { email_user, pass_user } = req.body;
    console.log('Login Dados:', email_user, pass_user)
    if ( email_user && pass_user ) {
      try {
        const result = await accessService.login(email_user, pass_user);
  
        if (result.success) {
          res.sendStatus(200)
        } else {
          res.status(400).json({ error: result.error });
        }
      } catch (error) {
        console.error('Erro no controlador ao logar o usuário:', error);
        res.status(500).json({ error: 'Houve um erro ao logar o usuário.' });
      }
    }
    
  }
}

module.exports = accessController;
