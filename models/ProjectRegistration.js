"use strict";

module.exports = function(sequelize, DataTypes) {
  var ProjectRegistration = sequelize.define("ProjectRegistration", {
    id_project : {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name : {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    definition : {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    status : {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    deadline : {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    project_objective : {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    project_result : {
      type: DataTypes.STRING(70),
      allowNull: false
    },
  });

  return ProjectRegistration;
};
