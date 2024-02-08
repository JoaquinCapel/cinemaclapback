import { Router } from 'express';
import { eventValidator } from '../validations/events.validations';
import { postEvent, updateEvent } from '../controllers/events.controllers';
import { idValidator } from '../validations/generic.validations';

const router = Router();

router.post('/event', eventValidator, postEvent);
router.put('/event/:id',idValidator, eventValidator, updateEvent);

export default router;