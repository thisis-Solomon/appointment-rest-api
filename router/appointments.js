const express = require('express')
const appointments = require('../models/appointments')
const Appointments = require('../models/appointments')
const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const appointments = await Appointments.find({})

    res.status(200).json(appointments)
  } catch (error) {
    res.status(400).send(error)
  }
})

route.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointments.findById(req.params.id)

    res.status(200).json(appointment)
  } catch (error) {
    res.status(400).send(error)
  }
})

route.post('/', async (req, res) => {
  const appointment = new Appointments({
    name: req.body.name,
    appointment: req.body.appointment,
    notes: req.body.notes,
    date: req.body.date
  })

  try {
    const savedAppointment = await appointment.save()

    res.status(200).json(savedAppointment)
  } catch (error) {
    res.status(400).send(error)
  }
})

route.delete('/:id', async (req, res) => {
  try {
    const removedAppointment = await Appointments.findByIdAndRemove({
      _id: req.params.id
    })

    res.status(200).json(removedAppointment)
  } catch (error) {
    res.status(400).send(error)
  }
})

route.patch('/:id', async (req, res) => {
  try {
    const modifiedAppointment = await Appointments.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          appointment: req.body.appointment,
          notes: req.body.notes,
          date: req.body.date
        }
      }
    )

    res.status(200).json(modifiedAppointment)
  } catch (error) {
    res.status(400).send(error)
  }
})
module.exports = route
