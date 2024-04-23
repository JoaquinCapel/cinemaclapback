import { body } from 'express-validator';

export const postProvinceValidation = [
    body('id_provinces')
        .isInt({ min: 0 })
        .withMessage('id_provinces must be an unsigned integer'),
    body('provinces')
        .isLength({ max: 30 })
        .withMessage('provinces must be a string with a maximum length of 30 characters')
];

export const updateProvinceValidation = [
    body('provinces')
        .optional()
        .isLength({ max: 30 })
        .withMessage('provinces must be a string with a maximum length of 30 characters')
];