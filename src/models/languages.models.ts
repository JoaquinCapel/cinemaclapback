import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Language = db.define('language', {
    id_language: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cod_lp: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'languages'
});

export default Language;