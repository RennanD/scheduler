const { Router } = require('express');

const sessionsRoutes = Router();

const AuthenticateUserService = require('../services/AuthenticateUserService');

sessionsRoutes.post('/', async (request, response ) => {
  const { email, password } = request.body;
  
  try {
    const creteSession = new AuthenticateUserService();

    const session = await creteSession.execute({
      email,
      password
    });

    delete session.user.password;

    return response.json(session);
  } catch(err) {
    return response.status(401).json({error: err.message})
  }
});

module.exports = sessionsRoutes;
