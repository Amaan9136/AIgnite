import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Gmail SMTP
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // your Gmail App Password
  },
});

const cleanEventName = (eventName) => {
  // Convert to lowercase, remove " registration" (case-insensitive), and trim
  return eventName.toLowerCase().replace(/\s*registration\s*/i, '').trim();
};

export const sendRegistrationEmail = async (to, teamId, secureKey, eventName) => {
  const domain = process.env.DOMAIN || 'https://yourdomain.com';
  const url = `${domain}dashboard/${teamId}?key=${secureKey}`;
  const cleanName = cleanEventName(eventName);

  // Base message parts
  let eventMessage = '';
  switch (cleanName) {
    case 'techxhibit':
     eventMessage = `Thank you for registering your team for <strong>TechXhibit</strong>! We’re excited to see your innovative projects. Please stay tuned—we’ll update you about the project selection based on your PPT submission.`;
break;
    case 'tech escape room':
      eventMessage = `Welcome to the thrilling <strong>Tech Escape Room</strong> challenge! Gear up for some exciting puzzles.`;
      break;
    case 'esports':
      eventMessage = `Your team is all set for the competitive world of <strong>Esports</strong>. Best of luck!`;
      break;
    case "think 'n' blink":
      eventMessage = `Thanks for joining <strong>Think 'N' Blink</strong>! Sharpen your minds and have fun.`;
      break;
    default:
      eventMessage = `Thank you for registering your team for <strong>${eventName}</strong>.`;
  }

  const mailOptions = {
    from: `"AIgnite 2.0" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Team Registration Successful - AIgnite 2.0 (${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)})`,
    html: `
      <h1>Welcome to AIgnite 2.0! 🎉</h1>
      <p>${eventMessage}</p>
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
