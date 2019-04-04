const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')1
const authRoutes = require('./routes/auth')
const authorsRoutes = require('./routes/authors')
const booksRoutes = require('./routes/books')
const usersRoutes = require('./routes/users')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true})) //
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/authors', authorsRoutes)
app.use('/api/books', booksRoutes)
app.use('/api/users', usersRoutes)


module.exports = app;