import connectDB from '../../../server/mongodb';
import Teams from '../../../server/models/Teams';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { utr } = req.query;

    if (!utr) {
      return res.status(400).json({ message: 'UTR number is required' });
    }

    try {
      const team = await Teams.findOne({ transactionId: utr });
      if (!team) {
        return res.status(404).json({ message: 'Team not found for the provided UTR number' });
      }
      res.status(200).json({ teamId: team.teamId, secureKey: team.secureKey });
    } catch (error) {
      console.error('Error fetching team by UTR:', error);
      res.status(500).json({ message: 'Error fetching team' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
