import { check } from 'express-validator';

export const idValidator = [
    check('id')
        .isInt()
        .withMessage('Invalid ID')
];