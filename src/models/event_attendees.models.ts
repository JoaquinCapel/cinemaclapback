import { DataTypes } from 'sequelize';
import db from '../db/connection';

const EventAttendee = db.define('event_attendees', {
    event_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'event', 
            key: 'id_event', 
        },
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'users', 
            key: 'id_user', 
        },
    },
    inscription_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    rating: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default EventAttendee;