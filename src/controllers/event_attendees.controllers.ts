import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import EventAttendee from '../models/event_attendees.models';

export const postEventAttendee = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const eventAttendee = await EventAttendee.create(req.body);
        return res.status(201).json(eventAttendee);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};

export const updateEventAttendee = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const eventAttendee = await EventAttendee.findOne({
            where: {
                event_id: req.params.eventId,
                user_id: req.params.userId
            }
        });

        if (!eventAttendee) {
            return res.status(404).json({ error: 'Asistente al evento no encontrado.' });
        }

        await eventAttendee.update(req.body);
        return res.status(200).json(eventAttendee);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};