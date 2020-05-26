import { Router } from 'express';

import { indexController } from '../controllers/index.controller';

const router = Router();

router.get('/', indexController);

export default router;
