"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageValidator = void 0;
const express_validator_1 = require("express-validator");
exports.languageValidator = [
    (0, express_validator_1.body)('name')
        .isLength({ min: 1 })
        .withMessage('El nombre del idioma es obligatorio.'),
    (0, express_validator_1.body)('code')
        .isLength({ min: 2, max: 2 })
        .withMessage('El código del idioma debe tener exactamente 2 caracteres.'),
    (0, express_validator_1.body)('native_name')
        .isLength({ min: 1 })
        .withMessage('El nombre nativo del idioma es obligatorio.'),
];
