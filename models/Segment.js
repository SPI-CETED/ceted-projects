"use strict";

module.exports = function(sequelize, DataTypes) {
  var Segment = sequelize.define("Segment", {
    id_segment : {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    description : {
        type : DataTypes.STRING(70),
        allowNull: false
    }
  });

  return Segment;
};
