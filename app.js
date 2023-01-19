const express = require('express')
const path = require('path')
const compression = require('compression')
const cors = require('cors')
const robots = require('express-robots-txt')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(robots(__dirname + '/robots.txt'));
app.use(cors())

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

app.use(compression())

module.exports = app