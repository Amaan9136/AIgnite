import connectDB from '../../server/mongodb';
import User from '../../server/models/User';

export default async function handler(req, res) {
  const db=await connectDB();
 

  if (req.method === 'POST') {
    const payload = req.body;
    const fields = payload.data?.fields || [];

console.log("data received");
console.log(fields);
    fields.forEach(field => {
      console.log(`${field.title}: ${field.value}`);
    });

    // Save to User schema
    const email = fields[0]?.value;
    const imageLink = fields[1]?.value?.[0]?.url;

    if (email && imageLink) {
      try {
        const newUser = new User({ email, imageLink });
        await newUser.save();
        console.log('User saved successfully');
      } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: 'Error saving user' });
      }
    }

    res.status(200).json({ message: 'Received and saved' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
