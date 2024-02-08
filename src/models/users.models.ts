import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
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

export default User;