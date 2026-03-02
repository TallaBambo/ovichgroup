const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
}

const transport = nodemailer.createTransport(mailGun(auth))

const sendMail = (name, email, number, subject, message, cb) => {

    const mailOptions = {
        from: email,
        to: 'ovichnewsmedia@gmail.com',
        subject,
        text: `My name is ${name}, you can reach me by ${number}. ${message}`
    }

    transport.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail
