import { body } from 'express-validator';

export const languageValidator = [
  body('name')
    .isLength({ min: 1 })
    .withMessage('El nombre del idioma es obligatorio.'),
  body('code')
    .isLength({ min: 2, max: 2 })
    .withMessage('El código del idioma debe tener exactamente 2 caracteres.'),
  body('native_name')
    .isLength({ min: 1 })
    .withMessage('El nombre nativo del idioma es obligatorio.'),
];