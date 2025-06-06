import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  credential: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Credential',
    required: true
  }
});

export const Password = mongoose.model('Password', passwordSchema);