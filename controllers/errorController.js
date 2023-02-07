const AppError = require('./../utils/appError')

const handleCastErrorDB = () => {
    const message = `Invalid ${err.path}: ${err.value} `
    return new AppError(message, 400)
}

const handleDuplicateFieldDB = err => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
    const message = `Duplicat field value: ${value}. Please use another value!`
    return new AppError(message, 400)
}

const handleValidationError = () => {
    const errors = Object.values(err.errors).map(el => el.message)

    const message = `Invalid input data. ${errors.join('. ')}`
    return new AppError(message, 400)
}

const handleJETError = err => new AppError('Invalid token. Please loggin again!', 401)

const handleJETExpiredError = err => new AppError('Your token has expired! Please log in again', 401)

const sendErrorDev = (err, req, res) => {
    if (req.originalUrl.startsWith('/api')) {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        })
    } else {
        res.status(err.statusCode).render('error', {
            title: 'Something went wrong!',
            msg: err.message
        })
    }

}

const sendErrorProd = (err, res, req) => {
    if (req.originalUrl.startsWith('/api')) {
        //Operational, trusted error: send message to client
        if (err.isOperational) {
            res.status(err.statusCode).render('error', {
                title: 'Something went wrong!',
                msg: err.message
            })
            //Programming or other unknown error: dont leak error details
        } else {
            // 1) Log error
            console.error('ERROR 💥', err)

            // 2) Send generic message
            res.status(err.statusCode).render('error', {
                title: 'Something went wrong!',
                msg: 'Please try again later'
            })
        }
    } else {
        res.status(err.statusCode).render('error', {
            title: 'Something went wrong!',
            msg: err.message
        })
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    if (process.env.NODE_ENV === 'development') {
        let error = { ...err }
        if (error.name === 'CastError') error = handleCastErrorDB(error)
        sendErrorDev(err, req, res)
    } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err }
        error.message = err.message
        if (error.name === 'CastError') error = handleCastErrorDB(error)
        if (error.code === 11000) error = handleDuplicateFieldDB(error)
        if (error.name === 'ValidationError') error = handleValidationError(error)
        if (error.name === 'JsonWebTokenError') error = handleJETError(error)
        if (error.name === 'TokenExpiredError') error = handleJETExpiredError(error)
        sendErrorProd(error, req, res)
    }
}