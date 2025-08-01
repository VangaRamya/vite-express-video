require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.use(cors({ origin: ["http://localhost:5173", "https://vite-express-video.vercel.app"] }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email,phone, orderType, products, message,address,landmark } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 1. Send email to the user (confirmation copy)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! Here's a copy of your message:</p>
        <hr />
        <p><strong>Order Type:</strong> ${orderType}</p>
        <p><strong>Products:</strong> ${products}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Landmark:</strong> ${landmark}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p>We’ll get back to you soon!</p>
      `,
    });

    // 2. Send email to the admin (you)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Order Received from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Order Type:</strong> ${orderType}</p>
        <p><strong>Products:</strong> ${products}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Landmark:</strong> ${landmark}</p>
      `,
    });

    // ✅ Only respond once
    res.status(200).json({ success: true, message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

