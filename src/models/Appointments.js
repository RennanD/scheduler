const { model, Schema } = require('mongoose');

const AppointmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
},{
  timestamps: true,
})

module.exports = model('Appointment', AppointmentSchema);