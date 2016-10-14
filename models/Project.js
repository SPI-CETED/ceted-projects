"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    id : {
      type: DataTypes.INTEGER(6).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    }
  });

  return Project;
};
