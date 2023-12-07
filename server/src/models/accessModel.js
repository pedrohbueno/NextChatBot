const { DataTypes } = require('sequelize');
const  sequelize  = require('../config/sequelizeConfig');

const accessModel = sequelize.define('user', {
  pk_id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass_user: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {

    tableName: 'user', 
    timestamps: false
  // Outros campos do modelo...
});

module.exports = accessModel;
