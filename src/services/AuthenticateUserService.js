const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const authConfig = require('../config/auth');

const User = require('../models/User');

class AuthenticateUserService {
  async execute({ email, password }) {

    const userExists = await User.findOne({'email': email});

    if (!userExists) {
      throw new Error('Usuário não encontrado.');
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error('Credenciais inválidas');
    }

    const { secret, expiresIn } = authConfig;

    const token = sign({}, secret, {
      subject: userExists.id,
      expiresIn,
    });

    return {
      user: userExists,
      token,
    };
  }
}

module.exports = AuthenticateUserService;