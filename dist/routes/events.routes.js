"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_validations_1 = require("../validations/events.validations");
const events_controllers_1 = require("../controllers/events.controllers");
const generic_validations_1 = require("../validations/generic.validations");
const router = (0, express_1.Router)();
router.get('/', events_controllers_1.getEvents);
router.get('/:id', events_controllers_1.getEvent);
router.post('/event', events_validations_1.eventValidator, events_controllers_1.postEvent);
router.put('/event/:id', generic_validations_1.idValidator, events_validations_1.eventValidator, events_controllers_1.updateEvent);
exports.default = router;
