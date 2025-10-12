import connectDB from '../../../../server/mongodb';
import Teams from '../../../../server/models/Teams';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../../../lib/session';

export default async function handler(req, res) {
  await connectDB();

  // Check for admin session
  const session = await getIronSession(req, res, sessionOptions);
  if (!session.admin) {
    return res.status(401).json({ message: 'Unauthorized: Admin access required' });
  }

  if (req.method === 'PUT') {
    const { teamId, paymentVerified } = req.body;

    if (!teamId || typeof paymentVerified !== 'boolean') {
      return res.status(400).json({ message: 'teamId and paymentVerified boolean are required' });
    }

    try {
      const team = await Teams.findOneAndUpdate(
        { teamId },
        { paymentVerified },
        { new: true }
      );

      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }

      res.status(200).json({ message: 'Payment verification status updated', team });
    } catch (error) {
      console.error('Error updating payment verification:', error);
      res.status(500).json({ message: 'Error updating payment verification' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
