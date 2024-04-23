import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Province = db.define('provinces', {
    id_provinces: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    provinces: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Province;