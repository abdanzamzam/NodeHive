'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Biodata.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      numberPhone: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Biodata'
    }
  )
  return Biodata
}
