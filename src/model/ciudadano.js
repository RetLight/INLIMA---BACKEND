import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

import Usuario from './usuario.js'

const Ciudadano = sequelize.define('ciudadano', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(15)
    },
    apellido_paterno: {
        type: DataTypes.STRING(50)
    },
    apellido_materno: {
        type: DataTypes.STRING(50)
    },
    usuario_id: {
        type: DataTypes.INTEGER
    }
})

Usuario.belongsTo(Ciudadano, {
    foreignKey: 'usuario_id',
    targetId: 'id'
}, {
    tableName: 'ciudadano',
    freezeTableName: true
  });

export default Ciudadano