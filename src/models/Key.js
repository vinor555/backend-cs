const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Key', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    crates: DataTypes.JSON, // Almacenamos el arreglo de crates asociado
    image: DataTypes.STRING,
  }, {
    tableName: 'keys',
    timestamps: false,
  });
};