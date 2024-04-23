import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import EventAttendee from '../models/event_attendees.models';

export const getEventAttendees = async (req: Request, res: Response) => {

    const listEventAttendees = await EventAttendee.findAll();
    res.json(listEventAttendees);
}

export const getEventAttendee = async (req: Request, res: Response) => {
    const { eventId, userId } = req.params;
    const eventAttendee = await EventAttendee.findOne({
        where: {
            event_id: eventId,
            user_id: userId
        }
    });

    if (eventAttendee) {
        res.json(eventAttendee);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un asistente al evento con el id ${userId}`
        });
    };
}


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

export const deleteEventAttendee = async (req: Request, res: Response) => {
    const { eventId, userId } = req.params;

    if (!Number.isInteger(Number(eventId)) || !Number.isInteger(Number(userId))) {
        return res.status(400).json({
            msg: 'ERROR 400. eventId y userId deben ser números'
        });
    }

    const eventAttendee = await EventAttendee.findOne({ where: { event_id: eventId, user_id: userId } });

    if (!eventAttendee) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un asistente al evento con event_id ${eventId} y user_id ${userId}`
        });
    } else {
        await eventAttendee.destroy();
        res.json({
            msg: `El asistente al evento con event_id ${eventId} y user_id ${userId} ha sido eliminado con éxito`
        });
    }
}

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