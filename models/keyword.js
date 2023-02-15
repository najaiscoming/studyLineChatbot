const { DataTypes } = require('sequelize');
const sequelize = require("../config/mysql");

const Keyword = sequelize.define('keyword', {
  // Model attributes are defined here
  word: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }, 
  type: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  }
}, {
  // Other model options go here
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'keyword'
});

module.exports = Keyword;