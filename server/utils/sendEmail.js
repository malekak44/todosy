const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'malekak44@gmail.com',
        pass: 'xsctsbvzhzrabcvc',
    },
});

const sendEmail = ({ name, email, passwordToken, origin }) => {
    const resetUrl = `${origin}/reset-password?token=${passwordToken}&email=${email}`;
    const message = `<p>Please reset password by clicking on the following link : <a href="${resetUrl}">Reset Password</a></p>`;

    transporter.sendMail({
        from: 'Todosy <malekak44@gmail.com>',
        to: email,
        subject: 'Reset Password',
        html: `<h3>Hello, ${name}</h3> 
        ${message}`,
    });
}

module.exports = sendEmail;