import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Municipality from '../models/municipalities.models';

export const getMunicipalities = async (req: Request, res: Response) => {
    const listMunicipalities = await Municipality.findAll();
    res.json(listMunicipalities);
}

export const getMunicipality = async (req: Request, res: Response) => {
    const { id } = req.params;
    const municipality = await Municipality.findOne({
        where: {
            id_municipalities: id
        }
    });

    if (municipality) {
        res.json(municipality);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un municipio con el id ${id}`
        });
    };
}

export const postMunicipality = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const municipality = await Municipality.create(req.body);
        return res.status(201).json(municipality);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};

export const deleteMunicipality = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id))) {
        return res.status(400).json({
            msg: 'ERROR 400. id debe ser un número'
        });
    }

    const municipality = await Municipality.findOne({ where: { id_municipalities: id } });

    if (!municipality) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un municipio con el id ${id}`
        });
    } else {
        await municipality.destroy();
        res.json({
            msg: `El municipio con el id ${id} ha sido eliminado con éxito`
        });
    }
}

export const updateMunicipality = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const municipality = await Municipality.findOne({
            where: {
                id_municipalities: req.params.id
            }
        });

        if (!municipality) {
            return res.status(404).json({ error: 'Municipio no encontrado.' });
        }

        await municipality.update(req.body);
        return res.status(200).json(municipality);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};