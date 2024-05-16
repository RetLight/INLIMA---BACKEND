import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

import Rol from './rol.js'
import Sexo from './sexo.js'

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(100)
    },
    foto: {
        type: DataTypes.STRING(500)
    },
    rol_id: {
        type: DataTypes.INTEGER
    },
    sexo_id: {
        type: DataTypes.INTEGER
    }
})

Usuario.belongsTo(Rol, {
    foreignKey: 'rol_id',
    targetId: 'id'
});
Usuario.belongsTo(Sexo, {
    foreignKey: 'sexo_id',
    targetId: 'id'
}, {
    tableName: 'usuario',
    freezeTableName: true
  });


export default Usuario