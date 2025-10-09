import mongoose from 'mongoose';
import connectDB from '../../../server/mongodb';

export default async function handler(req, res) {
  const { eventName, excludeTeamName } = req.query;

  if (!eventName) {
    return res.status(400).json({ message: 'Missing eventName parameter' });
  }

  try {
    await connectDB();

    // Find all teams in the same event excluding the current team
    const teams = await mongoose.connection.db.collection('teams').find({
      eventName: eventName,
      teamName: { $ne: excludeTeamName }
    }).toArray();

    if (teams.length === 0) {
      return res.status(404).json({ message: 'No other teams found in this event' });
    }

    // Pick a random team
    const randomIndex = Math.floor(Math.random() * teams.length);
    const randomTeam = teams[randomIndex];

    return res.status(200).json({ competitorTeamName: randomTeam.teamName });
  } catch (error) {
    console.error('Error fetching random team:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
