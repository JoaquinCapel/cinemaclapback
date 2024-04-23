"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Language = connection_1.default.define('language', {
    id_language: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cod_lp: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'languages'
});
exports.default = Language;
