import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  imageLink: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
