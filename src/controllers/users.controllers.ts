import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/users.models';


export const getUsers = async (req: Request, res: Response) => {

    const listUsers = await User.findAll();

    res.json(listUsers);
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un usuario con el id ${id}`
        });
    };
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un usuario con el id ${id}`
        });
    } else {
        await user.destroy();
        res.json({
            msg: `usuario con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postUser = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { body } = req;

    try {
        await User.create(body);

        res.json({
            msg: 'El usuario ha sido creado con éxito',
            body
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador'
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);
        if (user) {
            await user.update(body);
            res.json({
                msg: 'El usuario ha sido actualizado con éxito',
                user
            });
        } else {
            res.status(404).json({
                msg: `ERROR 404. No existe un usuario con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador'
        })
    }
}