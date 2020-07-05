const { Router } = require('express');

const userRouter = Router();

userRouter.get('/', (req, res ) => {
  return res.send('oi')
});

module.exports = userRouter;
