const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')

process.on('uncaughtException', err => {
    process.exit(1)
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`)
})
