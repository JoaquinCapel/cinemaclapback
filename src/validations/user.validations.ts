import { check } from 'express-validator';

export const userValidator = [
    check("username")
        .exists()
        .withMessage("El nombre de usuario es obligatorio")
        .isString()
        .withMessage("El nombre de usuario debe ser una cadena de texto")
        .isLength({ min: 4 })
        .withMessage("El nombre de usuario debe tener al menos 4 caracteres"),
    check("email")
        .exists()
        .withMessage("El correo electrónico es obligatorio")
        .isEmail()
        .withMessage("El correo electrónico debe ser una dirección de correo válida"),
    check("password")
        .exists()
        .withMessage("La contraseña es obligatoria")
        .isString()
        .withMessage("La contraseña debe ser una cadena de texto")
        .isLength({ min: 5 })
        .withMessage("La contraseña debe tener al menos 5 caracteres"),
];