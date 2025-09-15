import connectDB from '../../server/mongodb';
import Teams from '../../server/models/Teams';
import { sendRegistrationEmail } from '../../server/mail';
import crypto from 'crypto';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const fields = req.body.data?.fields || [];
  const formName = req.body.data?.formName?.trim() || '';

  console.log('Form Received:', formName);

  const teamData = {
    eventName: formName,
  };

  // Determine the event type and process accordingly
  const normalizedForm = formName.toUpperCase();

  if (normalizedForm === 'TECHXHIBIT REGISTRATION') {
    processTechxhibitFields(fields, teamData);
  } else if (normalizedForm === 'ESPORTS REGISTRATION') {
    processEsportsFields(fields, teamData);
  } else if (
    normalizedForm === "THINK 'N' BLINK REGISTRATION" ||
    normalizedForm === 'TECH ESCAPE ROOM REGISTRATION'
  ) {
    processOtherFields(fields, teamData);
  } else {
    console.warn('Unknown event:', formName);
    return res.status(400).json({ message: 'Unknown event type' });
  }

  // Generate teamId and secureKey
  const random4digit = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  teamData.teamId = `${teamData.teamName}-${random4digit}`;
  teamData.secureKey = crypto.randomBytes(32).toString('hex');

  try {
    const newTeam = new Teams(teamData);
    await newTeam.save();
    console.log('✅ Team saved:', teamData.teamId);

   await sendRegistrationEmail(teamData.teamLeadEmail, teamData.teamId, teamData.secureKey, teamData.eventName);


    res.status(200).json({
      message: 'Team registered successfully',
      teamId: teamData.teamId,
    });
  } catch (error) {
    console.error('❌ Error saving team:', error);
    res.status(500).json({ message: 'Error saving team' });
  }
}

//
// 🔧 Helper: TECHXHIBIT
//
function processTechxhibitFields(fields, teamData) {
  fields.forEach(field => {
    const label = field.label.trim();
    const value = field.value;

    switch (label) {
      case 'Team Lead Name':
        teamData.teamLeadName = value;
        break;
      case 'Team Lead Email':
        teamData.teamLeadEmail = value;
        break;
      case 'Team Lead Phone Number':
        teamData.teamLeadPhoneNumber = value;
        break;
      case 'Team Name':
        teamData.teamName = value;
        break;
      case 'College Name':
        teamData.collegeName = value;
        break;
      case 'Semester':
        teamData.semester = parseInt(value, 10);
        break;
      case 'City':
        teamData.city = value;
        break;
      case 'Team Member 1 Name':
        teamData.additionalMember1 = value;
        break;
      case 'Team Member 2 Name':
        teamData.additionalMember2 = value;
        break;
      case 'Team Member 3 Name':
        teamData.additionalMember3 = value;
        break;
      case 'Project Title':
        teamData.projectTitle = value;
        break;
      case 'Project Description':
      case 'Project Description\n':
        teamData.projectDescription = value;
        break;
      case 'Project Category':
        teamData.projectCategory = value.map(id => {
          const option = field.options?.find(opt => opt.id === id);
          return option ? option.text : id;
        });
        break;
      case 'Payment Screenshot':
        teamData.paymentScreenshot = Array.isArray(value) ? value : [value];
        break;
      case 'Transaction ID / UTR':
        teamData.transactionId = value;
        break;
      default:
        break;
    }
  });

  // ✅ Set optional team members to undefined if missing or empty
  if (!teamData.additionalMember1) teamData.additionalMember1 = undefined;
  if (!teamData.additionalMember2) teamData.additionalMember2 = undefined;
  if (!teamData.additionalMember3) teamData.additionalMember3 = undefined;
}


//
// 🔧 Helper: ESPORTS
//
function processEsportsFields(fields, teamData) {
  fields.forEach(field => {
    const label = field.label.trim();
    const value = field.value;

    switch (label) {
      case 'Team Lead Name':
        teamData.teamLeadName = value;
        break;
      case 'Team Lead Email':
        teamData.teamLeadEmail = value;
        break;
      case 'Team Lead Phone Number':
        teamData.teamLeadPhoneNumber = value;
        break;
      case 'Team Name':
        teamData.teamName = value;
        break;
      case 'College Name':
        teamData.collegeName = value;
        break;
      case 'Semester':
        teamData.semester = parseInt(value, 10);
        break;
      case 'City':
        teamData.city = value;
        break;
      case 'Team Member 1 Name':
        teamData.additionalMember1 = value || undefined;
        break;
      case 'Team Member 2 Name':
        teamData.additionalMember2 = value || undefined;
        break;
      case 'Team Member 3 Name':
        teamData.additionalMember3 = value || undefined;
        break;
      case 'Select The Game': {
        const selectedId = Array.isArray(value) ? value[0] : value;
        const matchedOption = field.options?.find(opt => opt.id === selectedId);
        teamData.esportEvent = matchedOption ? matchedOption.text : selectedId;
        break;
      }
      case 'Payment Screenshot':
      case 'Payment Screenshot\n': // in case of trailing newline
        teamData.paymentScreenshot = Array.isArray(value) ? value : [value];
        break;
      case 'Transaction ID / UTR':
      case 'Transaction ID / UTR\n':
        teamData.transactionId = value;
        break;
      default:
        break;
    }
  });

  // Clear project-specific fields not used in Esports
  teamData.projectTitle = undefined;
  teamData.projectCategory = undefined;
  teamData.projectDescription = undefined;
}



//
// 🔧 Helper: THINK 'N' BLINK & ESCAPE ROOM
//
function processOtherFields(fields, teamData) {
  fields.forEach(field => {
    const label = field.label.trim();
    const value = field.value;

    switch (label) {
      case 'Team Lead Name':
        teamData.teamLeadName = value;
        break;
      case 'Team Lead Email':
        teamData.teamLeadEmail = value;
        break;
      case 'Team Lead Phone Number':
        teamData.teamLeadPhoneNumber = value;
        break;
      case 'Team Name':
        teamData.teamName = value;
        break;
      case 'College Name':
        teamData.collegeName = value;
        break;
      case 'Semester':
        teamData.semester = parseInt(value, 10);
        break;
      case 'City':
        teamData.city = value;
        break;
      case 'Team Member Name':
        teamData.additionalMember1 = value;
        break;
      case 'Payment Screenshot':
        teamData.paymentScreenshot = Array.isArray(value) ? value : [value];
        break;
      case 'Transaction ID / UTR':
        teamData.transactionId = value;
        break;
      default:
        break;
    }
  });

  // Optional team members cleanup
  if (!teamData.additionalMember1) teamData.additionalMember1 = undefined;
  teamData.additionalMember2 = undefined;
  teamData.additionalMember3 = undefined;

  // Clear unrelated fields
  teamData.projectTitle = undefined;
  teamData.projectCategory = undefined;
  teamData.projectDescription = undefined;
  teamData.esportEvent = undefined;
}
