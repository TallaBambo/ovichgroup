const express = require('express')
const path = require('path')
const compression = require('compression')
const cors = require('cors')
const robots = require('express-robots-txt')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoseSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const cookieParser = require('cookie-parser')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const viewRouter = require('./routes/viewRoutes')
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

var options = {
    etag: true,
    maxAge: process.env.CACHE_TIME,
    redirect: true,
    setHeaders: function (res, path, stat) {
        res.set({
            'x-timestamp': Date.now()
        })
    }
}
app.use(express.static(path.join(__dirname, 'public'), options))
app.use(robots(__dirname + '/robots.txt'));
app.use(cors())
app.options('*', cors())

//Developement logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())
app.use(mongoseSanitize())

// Data sanitization against XSS
app.use(xss())
app.use(compression())

app.use('/', viewRouter)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app