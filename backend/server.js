import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // load env

const app = express();
const PORT = process.env.PORT || 5000;

// Check env loaded
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS Loaded:", process.env.EMAIL_PASS ? "YES" : "NO");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Important

app.post("/send", async (req, res) => {
  console.log("Request Body Received:", req.body); // LOG REQUEST BODY

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    console.log("Missing Fields:", name, email, message);
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
