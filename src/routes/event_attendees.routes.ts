import { Router } from 'express';
import { deleteEventAttendee, getEventAttendee, getEventAttendees, postEventAttendee, updateEventAttendee } from '../controllers/event_attendees.controllers';
import { eventAttendeeValidator } from '../validations/event_attendees.validations';
import { idValidator } from '../validations/generic.validations';

const router = Router();

router.get('/', getEventAttendees);
router.get('/:eventId/:userId', idValidator, getEventAttendee);
router.post('/event-attendee', eventAttendeeValidator, postEventAttendee);
router.delete('/:eventId/:userId', idValidator, deleteEventAttendee);
router.put('/:eventId/:userId', updateEventAttendee);

export default router;