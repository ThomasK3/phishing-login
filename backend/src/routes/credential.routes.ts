import { Router } from 'express';
import { credentialController } from '../controllers/credential.controller';
import type { RequestHandler } from 'express';

const router = Router();

router.post('/', credentialController.create as RequestHandler);
router.get('/stats', credentialController.getStats as RequestHandler);

export default router;