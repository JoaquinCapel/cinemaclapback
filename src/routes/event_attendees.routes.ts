import { Router } from 'express';
import { postEventAttendee, updateEventAttendee } from '../controllers/event_attendees.controllers';
import { eventAttendeeValidator } from '../validations/event_attendees.validations';
import { idValidator } from '../validations/generic.validations';

const router = Router();

router.post('/event-attendee', eventAttendeeValidator, postEventAttendee);
router.put('/event-attendee/:eventId/:userId', idValidator, eventAttendeeValidator, updateEventAttendee);

export default router;