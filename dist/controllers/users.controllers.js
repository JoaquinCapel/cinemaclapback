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
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const express_validator_1 = require("express-validator");
const users_models_1 = __importDefault(require("../models/users.models"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield users_models_1.default.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_models_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un usuario con el id ${id}`
        });
    }
    ;
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_models_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un usuario con el id ${id}`
        });
    }
    else {
        yield user.destroy();
        res.json({
            msg: `usuario con id ${id} ha sido eliminado con éxito`
        });
    }
});
exports.deleteUser = deleteUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { body } = req;
    try {
        yield users_models_1.default.create(body);
        res.json({
            msg: 'El usuario ha sido creado con éxito',
            body
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador'
        });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield users_models_1.default.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({
                msg: 'El usuario ha sido actualizado con éxito',
                user
            });
        }
        else {
            res.status(404).json({
                msg: `ERROR 404. No existe un usuario con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error. Póngase en contacto con el administrador'
        });
    }
});
exports.updateUser = updateUser;
