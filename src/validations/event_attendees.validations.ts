import { body } from 'express-validator';

export const eventAttendeeValidator = [
  body('event_id')
    .isInt({ min: 1 })
    .withMessage('El ID del evento debe ser un número entero positivo.'),
  body('user_id')
    .isInt({ min: 1 })
    .withMessage('El ID del usuario debe ser un número entero positivo.'),
  body('inscription_date')
    .optional()
    .isDate()
    .withMessage('La fecha de inscripción debe ser una fecha válida.'),
  body('rating')
    .optional()
    .isInt({ min: 0, max: 5 })
    .withMessage('La calificación debe ser un número entero entre 0 y 5.'),
];