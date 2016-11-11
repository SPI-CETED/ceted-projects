"use strict";

module.exports = function(sequelize, DataTypes) {
    var Function = sequelize.define("Functions", {
        id_function : {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });

    return Function;
};