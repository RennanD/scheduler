const { isBefore, parseISO } = require('date-fns');

const User = require('../models/User');

class ListAppointmentsService {
  async execute({ user_id }) {

    const checkUser = await User.findById(user_id).populate('appointments');

    if(!checkUser) {
      throw new Error('Usuário não encontrado.')
    }

    const appointments = checkUser.appointments

    return appointments;

  }
}

module.exports = ListAppointmentsService;