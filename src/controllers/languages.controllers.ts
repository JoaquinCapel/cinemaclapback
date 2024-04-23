import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Language from '../models/languages.models';

export const getLanguages = async (req: Request, res: Response) => {
    const languages = await Language.findAll();
    res.json(languages);
}

export const getLanguage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const language = await Language.findOne({
        where: {
            id_language: id
        }
    });

    if (language) {
        res.json(language);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un idioma con el id ${id}`
        });
    };
}

export const postLanguage = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const language = await Language.create(req.body);
        return res.status(201).json(language);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};

export const deleteLanguage = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id))) {
        return res.status(400).json({
            msg: 'ERROR 400. id debe ser un número'
        });
    }

    const language = await Language.findOne({ where: { id_language: id } });

    if (!language) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un idioma con el id ${id}`
        });
    } else {
        await language.destroy();
        res.json({
            msg: `El idioma con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const updateLanguage = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const language = await Language.findOne({
            where: {
                id_language: id
            }
        });

        if (!language) {
            return res.status(404).json({ error: 'Idioma no encontrado.' });
        }

        await language.update(req.body);
        return res.status(200).json(language);
    } catch (error) {
        const err = error as Error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
};