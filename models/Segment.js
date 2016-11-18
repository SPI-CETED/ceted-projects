"use strict";

module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
	var Segment = sequelize.define("segment", {
		id_segment : {
			type: DataTypes.INTEGER(6).UNSIGNED,
			primaryKey: true,
			autoIncrement: true
		},
		description : {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return Segment;
=======
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
>>>>>>> 10ca3fe7fa350ba75503c974e5ba377f859200ef
};
