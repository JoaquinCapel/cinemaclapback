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
exports.updateMunicipality = exports.deleteMunicipality = exports.postMunicipality = exports.getMunicipality = exports.getMunicipalities = void 0;
const express_validator_1 = require("express-validator");
const municipalities_models_1 = __importDefault(require("../models/municipalities.models"));
const getMunicipalities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMunicipalities = yield municipalities_models_1.default.findAll();
    res.json(listMunicipalities);
});
exports.getMunicipalities = getMunicipalities;
const getMunicipality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const municipality = yield municipalities_models_1.default.findOne({
        where: {
            id_municipalities: id
        }
    });
    if (municipality) {
        res.json(municipality);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un municipio con el id ${id}`
        });
    }
    ;
});
exports.getMunicipality = getMunicipality;
const postMunicipality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const municipality = yield municipalities_models_1.default.create(req.body);
        return res.status(201).json(municipality);
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
exports.postMunicipality = postMunicipality;
const deleteMunicipality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
        return res.status(400).json({
            msg: 'ERROR 400. id debe ser un número'
        });
    }
    const municipality = yield municipalities_models_1.default.findOne({ where: { id_municipalities: id } });
    if (!municipality) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un municipio con el id ${id}`
        });
    }
    else {
        yield municipality.destroy();
        res.json({
            msg: `El municipio con el id ${id} ha sido eliminado con éxito`
        });
    }
});
exports.deleteMunicipality = deleteMunicipality;
const updateMunicipality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const municipality = yield municipalities_models_1.default.findOne({
            where: {
                id_municipalities: req.params.id
            }
        });
        if (!municipality) {
            return res.status(404).json({ error: 'Municipio no encontrado.' });
        }
        yield municipality.update(req.body);
        return res.status(200).json(municipality);
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
exports.updateMunicipality = updateMunicipality;
