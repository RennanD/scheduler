const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  appointments: [{
    type: Schema.Types.ObjectId,
    ref: 'Appointments'
  }]
},{
  timestamps: true,
})

module.exports = model('User', UserSchema);