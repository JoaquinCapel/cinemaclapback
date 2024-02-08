"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const EventAttendee = connection_1.default.define('event_attendees', {
    event_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'event',
            key: 'id_event',
        },
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'users',
            key: 'id_user',
        },
    },
    inscription_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = EventAttendee;
