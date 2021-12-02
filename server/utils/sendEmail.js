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
    const message = `<h3>Please reset password by clicking on the following link : <a href="${resetUrl}">Reset Password</a></h3>`;

    transporter.sendMail({
        from: 'Todosy <malekak44@gmail.com>',
        to: email,
        subject: 'Reset Password',
        html: `<h2>Hello, ${name}</h2> 
        ${message}`,
    });
}

module.exports = sendEmail;