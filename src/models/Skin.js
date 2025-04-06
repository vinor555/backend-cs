const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Skin', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    crates: DataTypes.JSON, // Aqui almaceno un arreglo de objetos (id, name, image)
    team: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'skins',
    timestamps: false,
  });
};