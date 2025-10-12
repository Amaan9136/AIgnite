import bcrypt from 'bcryptjs';
import connectDB from '../../../server/mongodb';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../../lib/session';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const mongoose = await connectDB();
    const db = mongoose.connection.db;

    const admin = await db.collection('admins').findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Set admin session
    const session = await getIronSession(req, res, sessionOptions);
    session.admin = { username: admin.username, id: admin._id };
    await session.save();

    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Error during admin login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
