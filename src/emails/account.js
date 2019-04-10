const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    console.log(`Sending welcome mail to ${email}`)
    sgMail.send({
        to: email,
        from: 'artgrohe@gmail.com',
        subject: 'Welcome to the task app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    console.log(`Sending goodbye mail to ${email}`)
    sgMail.send({
        to: email,
        from: 'artgrohe@gmail.com',
        subject: 'Goodbye!',
        text: `Goodbye, ${name}.
        I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}