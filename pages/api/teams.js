import connectDB from '../../server/mongodb';
import Teams from '../../server/models/Teams';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const teams = await Teams.find({});
      res.status(200).json(teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
      res.status(500).json({ message: 'Error fetching teams' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
