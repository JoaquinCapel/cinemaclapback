import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Province from '../models/provinces.models';

export const getProvinces = async (req: Request, res: Response) => {
    const listProvinces = await Province.findAll();
    res.json(listProvinces);
}

export const getProvince = async (req: Request, res: Response) => {
    const { id } = req.params;
    const province = await Province.findOne({
        where: {
            id_provinces: id
        }
    });

    if (province) {
        res.json(province);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe una provincia con el id ${id}`
        });
    };
}

export const postProvince = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const province = await Province.create(req.body);
        return res.status(201).json(province);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};

export const deleteProvince = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id))) {
        return res.status(400).json({
            msg: 'ERROR 400. id debe ser un número'
        });
    }

    const province = await Province.findOne({ where: { id_provinces: id } });

    if (!province) {
        return res.status(404).json({
            msg: `ERROR 404. No existe una provincia con el id ${id}`
        });
    } else {
        await province.destroy();
        res.json({
            msg: `La provincia con el id ${id} ha sido eliminada con éxito`
        });
    }
}

export const updateProvince = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const province = await Province.findOne({
            where: {
                id_provinces: req.params.id
            }
        });

        if (!province) {
            return res.status(404).json({ error: 'Provincia no encontrada.' });
        }

        await province.update(req.body);
        return res.status(200).json(province);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};