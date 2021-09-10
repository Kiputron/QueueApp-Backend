"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Company extends Model {}
	Company.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING(255),
				unique: true,
			},
			code_company: {
				allowNull: false,
				type: DataTypes.STRING(255),
				unique: true,
			},
			address: {
				allowNull: false,
				type: DataTypes.STRING(255),
				unique: true,
			},
			profile_picture: {
				allowNull: true,
				type: DataTypes.STRING(255),
				unique: true,
			},
		},
		{
			sequelize,
			modelName: "Company",
			tableName: "company",
			underscored: true,
			freezeTableName: true,
			paranoid: true,
		}
	);
	return Company;
};
