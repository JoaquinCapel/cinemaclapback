"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const languages_controllers_1 = require("../controllers/languages.controllers");
const languages_validations_1 = require("../validations/languages.validations");
const generic_validations_1 = require("../validations/generic.validations");
const router = (0, express_1.Router)();
router.get('/', languages_controllers_1.getLanguages);
router.get('/:id', generic_validations_1.idValidator, languages_controllers_1.getLanguage);
router.post('/language', languages_validations_1.languageValidator, languages_controllers_1.postLanguage);
router.delete('/:id', generic_validations_1.idValidator, languages_controllers_1.deleteLanguage);
router.put('/:id', languages_validations_1.languageValidator, languages_controllers_1.updateLanguage);
exports.default = router;
