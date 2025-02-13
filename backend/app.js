require("dotenv").config(); 
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const reviewRoutes = require('./routes/reviewRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/reviews',reviewRoutes);

// Email sending route
app.post("/send-mail", async (req, res) => {
  const { fname, lname, email, phone, message } = req.body;

  try {
    
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service (e.g., Gmail)
      auth: {
        user: process.env.EMAIL, // Your email address from .env
        pass: process.env.PASSWORD, // Your app password or email password
      },
    });

    // Email options
    const mailOptions = {
      from: `Digital Paaji<${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL, // Your email to receive the form submission
      subject: `New Contact Form Submission from ${fname}`,
      text: `You have a new message:
      
      FName: ${fname}
      LName: ${lname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });


  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});










// const express = require('express')
// const cors = require('cors')
// const reviewRoutes = require('./routes/reviewRoutes')

// const app= express();

// app.use(cors());
// app.use(express.json());

// app.use('/reviews',reviewRoutes);


// app.listen(5000,()=>{
//     console.log('Server running on http://localhost:5000/reviews/')
// })

