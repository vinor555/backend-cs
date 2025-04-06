const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Agent', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    team: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'agents',
    timestamps: false,
  });
};