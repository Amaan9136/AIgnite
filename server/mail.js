import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Gmail SMTP
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // your Gmail App Password
  },
});

export const sendRegistrationEmail = async (to, teamId, secureKey) => {
  const domain = process.env.DOMAIN || 'https://yourdomain.com';
  const url = `${domain}/dashboard/${teamId}?key=${secureKey}`;

  const mailOptions = {
    from: `"AIgnite 2.0" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Team Registration Successful - AIgnite 2.0',
    html: `
      <h1>Welcome to AIgnite 2.0! 🎉</h1>
      <p>Your team has been successfully registered.</p>
      <p><strong>Team ID:</strong> ${teamId}</p>
      <p>Access your dashboard here: 
        <a href="${url}" target="_blank">${url}</a>
      </p>
      <p>⚠️ Keep this link secure as it contains your unique access key.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', to);
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};
