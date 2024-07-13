const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the CORS middleware
require('dotenv').config();
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS //'gaxx tzzt qmzp exlt'
    }
});

app.post('/send-email', (req, res) => {
    const { firstname, lastname, email, city, message, address } = req.body;

    const html =
    `
    <strong>Client info:</strong>
    <br>Name: ${firstname} ${lastname}</br>
    <br>Email: ${email}</br>
    <br>Address: ${address}, ${city}</br>
    <p></p>
    <h3>Message:</h3>
    <p>${message}</p>
    `
    console.log(firstname, lastname, email, city, message, address)
    // if (!email || !subject || !text) {
    //     return res.status(400).send('Missing email, subject, or text in request body');
    // }


    const mailOptions = {
        from: `${firstname} ${lastname} <${email}>`,
        to: 'avcompany45@gmail.com',
        subject: "Cleaning Services. Client Contact",
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
