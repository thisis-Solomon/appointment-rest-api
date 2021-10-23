const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

// routes import
const appointmentRoute = require('./router/appointments')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

// Mongo Database connect
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.aiwtr.mongodb.net/appointment?retryWrites=true&w=majority`
  )
  .then(() => console.log('mongodb connected'))

// middlewares
const PORT = process.env.PORT || 9000

// Routes
app.use('/api/appointment', appointmentRoute)
app.get('/', (req, res) => {
  res.send('have your appointment session recorded')
})

app.listen(PORT, () => console.log('server running', PORT))
