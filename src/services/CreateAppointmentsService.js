const { isBefore, parseISO } = require('date-fns');

const User = require('../models/User');
const Appointment = require('../models/Appointments');

class CreateAppointmentsService {
  async execute({user_id, title, description, date }) {

    const checkUser = await User.findById(user_id);

    if(!checkUser) {
      throw new Error('Usuário não encontrado.')
    }

    const checkTitle = await Appointment.findOne({'title': title})

    if (checkTitle) {
      throw new Error('Você já fez esse agendamento.')
    }

    if(isBefore(parseISO(date), new Date)) {
      throw new Error('Você não pode marcar um agendamento para uma data passada.')
    }

    const appointment = await Appointment.create({
      title,
      description,
      date
    })

    checkUser.appointments.push(appointment._id);

    await checkUser.save();

    return appointment;

  }
}

module.exports = CreateAppointmentsService;