"use strict";

module.exports = function(sequelize, DataTypes) {
  var ProjectHistory = sequelize.define("ProjectHistory", {
    id_projectHistory : {
      type: DataTypes.INTEGER(11).UNSIGNED
    },
    historic: {
    	type: DataTypes.STRING(255)
    },
    deadline: {
    	type: DataTypes.DATEONLY
    }
  });

  return ProjectHistory;
};
