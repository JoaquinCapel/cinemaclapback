import { check } from 'express-validator';

export const eventValidator = [
    check("creator_user_id")
        .exists()
        .withMessage("El ID del usuario creador es obligatorio")
        .isNumeric()
        .withMessage("El ID del usuario creador debe ser un número"),
    check("eventName")
        .exists()
        .withMessage("El nombre del evento es obligatorio")
        .isString()
        .withMessage("El nombre del evento debe ser una cadena de texto"),
    check("language_id")
        .exists()
        .withMessage("El ID del idioma es obligatorio")
        .isNumeric()
        .withMessage("El ID del idioma debe ser un número"),
    check("municipalities_id")
        .exists()
        .withMessage("El ID del municipio es obligatorio")
        .isNumeric()
        .withMessage("El ID del municipio debe ser un número"),
    check("place_projection")
        .exists()
        .withMessage("El lugar de proyección es obligatorio")
        .isString()
        .withMessage("El lugar de proyección debe ser una cadena de texto"),
    check("latitude")
        .exists()
        .withMessage("La latitud es obligatoria")
        .isDecimal()
        .withMessage("La latitud debe ser un número decimal"),
    check("longitude")
        .exists()
        .withMessage("La longitud es obligatoria")
        .isDecimal()
        .withMessage("La longitud debe ser un número decimal"),
    check("event_date")
        .exists()
        .withMessage("La fecha del evento es obligatoria")
        .isDate()
        .withMessage("La fecha del evento debe ser una fecha válida"),
    check("description")
        .exists()
        .withMessage("La descripción es obligatoria")
        .isString()
        .withMessage("La descripción debe ser una cadena de texto"),
];