const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Crate', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    tableName: 'crates',
    timestamps: false,
  });
};