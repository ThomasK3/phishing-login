import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  credential: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Credential'
  }
});

export const Password = mongoose.model('Password', passwordSchema);