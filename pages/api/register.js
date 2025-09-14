import connectDB from '../../server/mongodb';
import Teams from '../../server/models/Teams';
import { sendRegistrationEmail } from '../../server/mail';
import crypto from 'crypto';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const fields = req.body.data?.fields || [];

    console.log("data received");
    console.log("fields:", JSON.stringify(fields, null, 2));

    // Map fields to team data
    const teamData = {};

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
        case 'Team Member 1':
          teamData.additionalMember1 = field.value;
          break;
        case 'Team Member 2':
          teamData.additionalMember2 = field.value;
          break;
        case 'Team Member 3':
          teamData.additionalMember3 = field.value;
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
        default:
          break;
      }
    });

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
