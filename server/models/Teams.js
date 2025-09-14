import mongoose from 'mongoose';

const TeamsSchema = new mongoose.Schema({
  teamLeadName: {
    type: String,
    required: true,
    trim: true,
  },
  teamLeadEmail: {
    type: String,
    required: true,
    trim: true,
  },
  teamLeadPhoneNumber: {
    type: String,
    trim: true,
  },
  teamName: {
    type: String,
    required: true,
    trim: true,
  },
  collegeName: {
    type: String,
    trim: true,
  },
  semester: {
    type: Number,
  },
  city: {
    type: String,
    trim: true,
  },
  teamMembers: {
    type: String,
    trim: true,
  },
  additionalMember1: {
    type: String,
    trim: true,
  },
  additionalMember2: {
    type: String,
    trim: true,
  },
  projectTitle: {
    type: String,
    trim: true,
  },
  projectCategory: [{
    type: String,
  }],
  projectDescription: {
    type: String,
    trim: true,
  },
  paymentScreenshot: [{
    type: mongoose.Schema.Types.Mixed,
  }],
  transactionId: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

export default mongoose.models.Teams || mongoose.model('Teams', TeamsSchema);
