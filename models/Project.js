"use strict";

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    id_project : {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    }
  });

  return Project;
};
