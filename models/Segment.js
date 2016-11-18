"use strict";

module.exports = function(sequelize, DataTypes) {
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
};
