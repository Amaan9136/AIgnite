import connectDB from '../../../../server/mongodb';
import Teams from '../../../../server/models/Teams';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'PUT') {
    const { teamId, pptSelected } = req.body;

    if (!teamId || !pptSelected || !['selected', 'rejected'].includes(pptSelected)) {
      return res.status(400).json({ message: 'teamId and pptSelected (selected/rejected) are required' });
    }

    try {
      const team = await Teams.findOneAndUpdate(
        { teamId },
        { pptSelected },
        { new: true }
      );

      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }

      res.status(200).json({ message: 'PPT selection status updated', team });
      console.log(team);
    } catch (error) {
      console.error('Error updating PPT selection:', error);
      res.status(500).json({ message: 'Error updating PPT selection' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
