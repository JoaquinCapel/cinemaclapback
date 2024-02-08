"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Event = connection_1.default.define('event', {
    id_event: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    creator_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id_user',
        },
    },
    eventName: {
        type: sequelize_1.DataTypes.STRING
    },
    language_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'languages',
            key: 'id_language',
        },
    },
    municipalities_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'municipalities',
            key: 'id_municipalities',
        },
    },
    place_projection: {
        type: sequelize_1.DataTypes.STRING
    },
    latitude: {
        type: sequelize_1.DataTypes.DECIMAL(10, 8)
    },
    longitude: {
        type: sequelize_1.DataTypes.DECIMAL(11, 8)
    },
    event_date: {
        type: sequelize_1.DataTypes.DATE
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    create_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Event;
