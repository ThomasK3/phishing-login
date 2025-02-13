import mongoose from 'mongoose';

const credentialSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  ipAddress: String,
  userAgent: String,
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign'
  }
});

export const Credential = mongoose.model('Credential', credentialSchema);