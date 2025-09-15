import connectDB from '../../server/mongodb';
import Teams from '../../server/models/Teams';
import { sendRegistrationEmail } from '../../server/mail';
import crypto from 'crypto';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const fields = req.body.data?.fields || [];
    const formName = req.body.data?.formName || '';

    console.log("data received");
    console.log("fields:", JSON.stringify(req.body.data, null, 2));

    // Map fields to team data
    const teamData = {};
    teamData.eventName = formName;

    fields.forEach(field => {
      console.log(`${field.label}: ${field.value}`);
      switch (field.label) {
        case 'Team Lead Name':
          teamData.teamLeadName = field.value;
          break;
        case 'Team Lead Email':
          teamData.teamLeadEmail = field.value;
          break;
        case 'Team Lead Phone Number':
          teamData.teamLeadPhoneNumber = field.value;
          break;
        case 'Team Name':
          teamData.teamName = field.value;
          break;
        case 'College Name':
          teamData.collegeName = field.value;
          break;
        case 'Semester':
          teamData.semester = parseInt(field.value, 10);
          break;
        case 'City':
          teamData.city = field.value;
          break;
        case 'Team Member 1 Name':
          teamData.additionalMember1 = field.value;
          break;
        case 'Team Member 2 Name':
          teamData.additionalMember2 = field.value;
          break;
        case 'Team Member 3 Name':
          teamData.additionalMember3 = field.value;
          break;
        case 'Team Member Name':
          teamData.additionalMember1 = field.value;
          break;
        case 'Project Title':
          teamData.projectTitle = field.value;
          break;
        case 'Project Category':
          teamData.projectCategory = field.value.map(id => {
            const option = field.options.find(opt => opt.id === id);
            return option ? option.text : id;
          });
          break;
        case 'Project Description\n':
          teamData.projectDescription = field.value;
          break;
        case 'Payment Screenshot':
          teamData.paymentScreenshot = field.value;
          break;
        case 'Transaction ID / UTR':
          teamData.transactionId = field.value;
          break;
        case 'Select The Game':
          teamData.esportEvent = field.value;
          break;
        default:
          break;
      }
    });

    // Conditional logic for event-specific fields
    if (formName !== 'TECHXHIBIT REGISTRATION') {
      // For non-TECHXHIBIT events, clear additionalMember2 and additionalMember3
      teamData.additionalMember2 = undefined;
      teamData.additionalMember3 = undefined;
    }

    // Generate teamId and secureKey
    const random4digit = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    teamData.teamId = `${teamData.teamName}-${random4digit}`;
    teamData.secureKey = crypto.randomBytes(32).toString('hex');

    try {
      const newTeam = new Teams(teamData);
      await newTeam.save();
      console.log('Team saved successfully');

      // Send registration email
      await sendRegistrationEmail(teamData.teamLeadEmail, teamData.teamId, teamData.secureKey);

      res.status(200).json({ message: 'Team registered successfully', teamId: teamData.teamId });
    } catch (error) {
      console.error('Error saving team:', error);
      res.status(500).json({ message: 'Error saving team' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
