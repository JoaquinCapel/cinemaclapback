import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Event from '../models/events.models';

export const postEvent = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const event = await Event.create(req.body);
        return res.status(201).json(event);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado.' });
        }

        await event.update(req.body);
        return res.status(200).json(event);
    }catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};