import connectDB from '../../server/mongodb';
import Teams from '../../server/models/Teams';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../lib/session';

export default async function handler(req, res) {
  await connectDB();

  // Check for admin session
  const session = await getIronSession(req, res, sessionOptions);
  if (!session.admin) {
    return res.status(401).json({ message: 'Unauthorized: Admin access required' });
  }

  if (req.method === 'GET') {
    try {
      console.log('Fetching teams from database...');
      const teams = await Teams.find({});
      console.log(`Found ${teams.length} teams`);
      res.status(200).json(teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
      res.status(500).json({ message: 'Error fetching teams', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
