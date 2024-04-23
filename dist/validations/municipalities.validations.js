"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMunicipalityValidation = exports.postMunicipalityValidation = void 0;
const express_validator_1 = require("express-validator");
exports.postMunicipalityValidation = [
    (0, express_validator_1.body)('id_municipalities')
        .isInt({ min: 0 })
        .withMessage('id_municipalities must be an unsigned integer'),
    (0, express_validator_1.body)('province_id')
        .isInt({ min: 0 })
        .withMessage('province_id must be an unsigned integer'),
    (0, express_validator_1.body)('cod_municipalities')
        .isInt()
        .withMessage('cod_municipalities must be an integer'),
    (0, express_validator_1.body)('DC')
        .isInt()
        .withMessage('DC must be an integer'),
    (0, express_validator_1.body)('name')
        .isLength({ max: 100 })
        .withMessage('name must be a string with a maximum length of 100 characters')
];
exports.updateMunicipalityValidation = [
    (0, express_validator_1.body)('province_id')
        .optional()
        .isInt({ min: 0 })
        .withMessage('province_id must be an unsigned integer'),
    (0, express_validator_1.body)('cod_municipalities')
        .optional()
        .isInt()
        .withMessage('cod_municipalities must be an integer'),
    (0, express_validator_1.body)('DC')
        .optional()
        .isInt()
        .withMessage('DC must be an integer'),
    (0, express_validator_1.body)('name')
        .optional()
        .isLength({ max: 100 })
        .withMessage('name must be a string with a maximum length of 100 characters')
];
