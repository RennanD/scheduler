const { hash } = require('bcryptjs')

const User = require('../models/User');

const AppError = require('../errors/AppError');
const { then } = require('../database');

class CreateUserService {
  async execute({ email, password }) {

    const userExists = await User.findOne({"email": email});

    if(userExists) {
      throw new Error('Usuário já cadastrado.')
    }

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      email,
      password: passwordHash
    });

    return user;

  }
}

module.exports = CreateUserService;