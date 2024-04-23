import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Municipality = db.define('municipalities', {
    id_municipalities: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
    },
    province_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
    },
    cod_municipalities: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Código de muncipio DENTRO de la provincia, campo no único',
    },
    DC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Digito Control. El INE no revela cómo se calcula, secreto nuclear.',
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Municipality;