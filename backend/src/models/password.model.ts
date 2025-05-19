import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  password: {
    type: String,
    required: false
  },
  credential: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Credential',
    required: true
  }
});

export const Password = mongoose.model('Password', passwordSchema);