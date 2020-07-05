const { Router } = require('express');

const CreateAppointmentsService = require('../services/CreateAppointmentsService');
const ListAppointmentsService = require('../services/ListAppointmentsService');

const appointments = Router();

const authenticated = require('../middlewares/ensureAuthenticated');

appointments.use(authenticated);

appointments.get('/', async (request, response) => {
  const listAppointments = new ListAppointmentsService();
  
  const user_id = request.userId;

  try {
    const appointments = await listAppointments.execute({
      user_id
    })
  
    return response.json(appointments);
  } catch (err) {
    return response.status(400).json({error: err.message})
  }

})

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
