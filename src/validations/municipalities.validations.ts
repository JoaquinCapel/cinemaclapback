import { body } from 'express-validator';

export const postMunicipalityValidation = [
    body('id_municipalities')
        .isInt({ min: 0 })
        .withMessage('id_municipalities must be an unsigned integer'),
    body('province_id')
        .isInt({ min: 0 })
        .withMessage('province_id must be an unsigned integer'),
    body('cod_municipalities')
        .isInt()
        .withMessage('cod_municipalities must be an integer'),
    body('DC')
        .isInt()
        .withMessage('DC must be an integer'),
    body('name')
        .isLength({ max: 100 })
        .withMessage('name must be a string with a maximum length of 100 characters')
];

export const updateMunicipalityValidation = [
    body('province_id')
        .optional()
        .isInt({ min: 0 })
        .withMessage('province_id must be an unsigned integer'),
    body('cod_municipalities')
        .optional()
        .isInt()
        .withMessage('cod_municipalities must be an integer'),
    body('DC')
        .optional()
        .isInt()
        .withMessage('DC must be an integer'),
    body('name')
        .optional()
        .isLength({ max: 100 })
        .withMessage('name must be a string with a maximum length of 100 characters')
];