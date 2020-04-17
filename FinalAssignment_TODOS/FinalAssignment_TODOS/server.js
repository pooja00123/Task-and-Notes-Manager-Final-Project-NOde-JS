const express = require('express')
const { db } = require('./db')
const todoRoute = require('./routes/todos')
const noteRoute = require('./routes/notes')
const app = express()
port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/Assets', express.static(__dirname + 'Assets'))
app.use('/', express.static(__dirname + '/public'))

app.use('/todos',todoRoute)
app.use('/notes',noteRoute)


db.sync()
  .then(() => {
    app.listen(port)
  })
  .catch((err) => {
    console.error(err)
  })