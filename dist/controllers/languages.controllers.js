"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLanguage = exports.deleteLanguage = exports.postLanguage = exports.getLanguage = exports.getLanguages = void 0;
const express_validator_1 = require("express-validator");
const languages_models_1 = __importDefault(require("../models/languages.models"));
const getLanguages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield languages_models_1.default.findAll();
    res.json(languages);
});
exports.getLanguages = getLanguages;
const getLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const language = yield languages_models_1.default.findOne({
        where: {
            id_language: id
        }
    });
    if (language) {
        res.json(language);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un idioma con el id ${id}`
        });
    }
    ;
});
exports.getLanguage = getLanguage;
const postLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const language = yield languages_models_1.default.create(req.body);
        return res.status(201).json(language);
    }
    catch (error) {
        const err = error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
});
exports.postLanguage = postLanguage;
const deleteLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
        return res.status(400).json({
            msg: 'ERROR 400. id debe ser un número'
        });
    }
    const language = yield languages_models_1.default.findOne({ where: { id_language: id } });
    if (!language) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un idioma con el id ${id}`
        });
    }
    else {
        yield language.destroy();
        res.json({
            msg: `El idioma con id ${id} ha sido eliminado con éxito`
        });
    }
});
exports.deleteLanguage = deleteLanguage;
const updateLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const language = yield languages_models_1.default.findOne({
            where: {
                id_language: id
            }
        });
        if (!language) {
            return res.status(404).json({ error: 'Idioma no encontrado.' });
        }
        yield language.update(req.body);
        return res.status(200).json(language);
    }
    catch (error) {
        const err = error;
        console.log(err);
        res.status(500).json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador',
            error: err.message
        });
    }
});
exports.updateLanguage = updateLanguage;
