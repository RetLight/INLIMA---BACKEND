import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Municipalidad = sequelize.define('municipalidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(70)
    }
}, {
    // Especifica el nombre de la tabla sin pluralización automática
    tableName: 'municipalidad',
    freezeTableName: true
  })

export default Municipalidad;