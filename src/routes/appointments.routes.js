const { Router } = require('express');

const CreateAppointmentsService = require('../services/CreateAppointmentsService');

const appointments = Router();

const authenticated = require('../middlewares/ensureAuthenticated');

appointments.use(authenticated);

appointments.post('/', async (request, response ) => {
  const { title, description, date } = request.body;
  
  const user_id = request.userId;

  console.log(user_id);
  

  try {
    const createAppointment = new CreateAppointmentsService();

    const appointment = await createAppointment.execute({
      user_id,
      title,
      description,
      date
    });

    return response.json(appointment);
  } catch(err) {
    return response.status(400).json({error: err.message})
  }
});

module.exports = appointments;
