import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method !== 'POST'){
        return res.status(405).json({message: "Method is not allowes"})
    }

    const { name, email, subject, message } = req.body

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use 'true' for SSL on port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    });

    try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'rolandodelatorre03@gmail.com', // The email address you want to receive messages
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email.' });
  }
    
}