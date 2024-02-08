"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventAttendeeValidator = void 0;
const express_validator_1 = require("express-validator");
exports.eventAttendeeValidator = [
    (0, express_validator_1.body)('event_id')
        .isInt({ min: 1 })
        .withMessage('El ID del evento debe ser un número entero positivo.'),
    (0, express_validator_1.body)('user_id')
        .isInt({ min: 1 })
        .withMessage('El ID del usuario debe ser un número entero positivo.'),
    (0, express_validator_1.body)('inscription_date')
        .optional()
        .isDate()
        .withMessage('La fecha de inscripción debe ser una fecha válida.'),
    (0, express_validator_1.body)('rating')
        .optional()
        .isInt({ min: 0, max: 5 })
        .withMessage('La calificación debe ser un número entero entre 0 y 5.'),
];
