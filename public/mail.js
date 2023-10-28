const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: 'key-95912d5a74d4d93a97d9a8d16ff846e2',
        domain: 'sandboxc89338c4d7fd4e3f9cfa9b25bf4cd9ae.mailgun.org'
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
