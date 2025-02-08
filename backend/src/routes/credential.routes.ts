import { Router } from 'express';
import { credentialController } from '../controllers/credential.controller';

const router = Router();

router.post('/', credentialController.create);

export default router;