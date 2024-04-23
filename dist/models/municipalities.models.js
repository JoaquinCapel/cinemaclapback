"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Municipality = connection_1.default.define('municipalities', {
    id_municipalities: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
    },
    province_id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
    },
    cod_municipalities: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'Código de muncipio DENTRO de la provincia, campo no único',
    },
    DC: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'Digito Control. El INE no revela cómo se calcula, secreto nuclear.',
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Municipality;
