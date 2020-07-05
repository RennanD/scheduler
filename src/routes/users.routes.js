const { Router } = require('express');

const userRouter = Router();

const CreateUserService = require('../services/CreateUserService');
const { response } = require('../app');

userRouter.post('/', async (request, response ) => {
  const { email, password } = request.body;
  
  try {
    const creteUser = new CreateUserService();

    const user = await creteUser.execute({
      email,
      password
    });

    delete user.password;

    return response.json(user);
  } catch(err) {
    return response.status(400).json({error: err.message})
  }
});

module.exports = userRouter;
