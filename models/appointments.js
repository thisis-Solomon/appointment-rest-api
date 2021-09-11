const mongoose = require('mongoose')

const appointmentsShemma = new mongoose.Schema(
  {
    name: String,
    appointment: String,
    notes: String,
    date: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Appointment', appointmentsShemma)
