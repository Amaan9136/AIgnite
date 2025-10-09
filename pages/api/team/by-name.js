import connectDB from '../../../server/mongodb';
import Teams from '../../../server/models/Teams';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: 'Team name is required' });
    }

    try {
      const normalizedName = name.trim().replace(/\s+/g, ' ').toLowerCase();
      const team = await Teams.findOne({
        teamName: new RegExp(`^${normalizedName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i')
      });
      if (!team) {
        return res.status(404).json({ message: 'Team not found for the provided team name' });
      }
      res.status(200).json({ teamId: team.teamId, secureKey: team.secureKey });
    } catch (error) {
      console.error('Error fetching team by name:', error);
      res.status(500).json({ message: 'Error fetching team' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
