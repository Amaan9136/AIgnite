import connectDB from '../../../server/mongodb';
import Teams from '../../../server/models/Teams';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { teamId } = req.query;
    const { key } = req.query;

    if (!teamId || !key) {
      return res.status(400).json({ message: 'Team ID and key are required' });
    }

    try {
      const team = await Teams.findOne({ teamId, secureKey: key });
      if (!team) {
        return res.status(404).json({ message: 'Team not found or invalid key' });
      }
      res.status(200).json(team);
    } catch (error) {
      console.error('Error fetching team:', error);
      res.status(500).json({ message: 'Error fetching team' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
