const nodemailer = require('nodemailer');
const config = require('./config/index');

exports.sendMail = async (to, subject, body) => {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        let mailOptions = {
            from: '"InEvents" <' + "lavish.inc.sl@gmail.com" + "> ",
            to: [to],
            subject: subject,
            text: body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });
}