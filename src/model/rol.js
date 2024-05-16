import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Rol = sequelize.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(20)
    }
}, {
    // Especifica el nombre de la tabla sin pluralización automática
    tableName: 'rol',
    freezeTableName: true
  })

export default Rol;