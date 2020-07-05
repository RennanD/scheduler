const { Router } = require('express');

const routes = Router();

const userRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const appointmentsRouter = require('./appointments.routes');

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter)
routes.use('/appointments', appointmentsRouter)

module.exports = routes;
