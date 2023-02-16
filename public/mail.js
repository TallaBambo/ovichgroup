const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: 'key-50b7300c5ab38663c045f3c55ac80cad',
        domain: 'mg.ovalvich.com'
    }
}

const transport = nodemailer.createTransport(mailGun(auth))

const sendMail = (name, email, number, subject, message, cb) => {

    const mailOptions = {
        from: email,
        to: 'ovalvich@gmail.com',
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
