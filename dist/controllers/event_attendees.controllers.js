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
exports.updateEventAttendee = exports.deleteEventAttendee = exports.postEventAttendee = exports.getEventAttendee = exports.getEventAttendees = void 0;
const express_validator_1 = require("express-validator");
const event_attendees_models_1 = __importDefault(require("../models/event_attendees.models"));
const getEventAttendees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listEventAttendees = yield event_attendees_models_1.default.findAll();
    res.json(listEventAttendees);
});
exports.getEventAttendees = getEventAttendees;
const getEventAttendee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventId, userId } = req.params;
    const eventAttendee = yield event_attendees_models_1.default.findOne({
        where: {
            event_id: eventId,
            user_id: userId
        }
    });
    if (eventAttendee) {
        res.json(eventAttendee);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un asistente al evento con el id ${userId}`
        });
    }
    ;
});
exports.getEventAttendee = getEventAttendee;
const postEventAttendee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const eventAttendee = yield event_attendees_models_1.default.create(req.body);
        return res.status(201).json(eventAttendee);
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
exports.postEventAttendee = postEventAttendee;
const deleteEventAttendee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventId, userId } = req.params;
    if (!Number.isInteger(Number(eventId)) || !Number.isInteger(Number(userId))) {
        return res.status(400).json({
            msg: 'ERROR 400. eventId y userId deben ser números'
        });
    }
    const eventAttendee = yield event_attendees_models_1.default.findOne({ where: { event_id: eventId, user_id: userId } });
    if (!eventAttendee) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un asistente al evento con event_id ${eventId} y user_id ${userId}`
        });
    }
    else {
        yield eventAttendee.destroy();
        res.json({
            msg: `El asistente al evento con event_id ${eventId} y user_id ${userId} ha sido eliminado con éxito`
        });
    }
});
exports.deleteEventAttendee = deleteEventAttendee;
const updateEventAttendee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const eventAttendee = yield event_attendees_models_1.default.findOne({
            where: {
                event_id: req.params.eventId,
                user_id: req.params.userId
            }
        });
        if (!eventAttendee) {
            return res.status(404).json({ error: 'Asistente al evento no encontrado.' });
        }
        yield eventAttendee.update(req.body);
        return res.status(200).json(eventAttendee);
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
exports.updateEventAttendee = updateEventAttendee;
