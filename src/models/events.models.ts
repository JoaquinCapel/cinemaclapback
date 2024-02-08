import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Event = db.define('event', {
    id_event: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    creator_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users', 
            key: 'id_user', 
        },
    },
    eventName: {
        type: DataTypes.STRING
    },
    language_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'languages', 
            key: 'id_language', 
        },
    },
    municipalities_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'municipalities',
            key: 'id_municipalities', 
        },
    },
    place_projection: {
        type: DataTypes.STRING
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8)
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8)
    },
    event_date: {
        type: DataTypes.DATE
    },
    description: {
        type: DataTypes.STRING
    },
    create_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},
    {
        createdAt: false,
        updatedAt: false
    }
);

export default Event;