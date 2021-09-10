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
			codeCompany: {
				allowNull: false,
				type: DataTypes.STRING(255),
				unique: true,
				field: "code_company",
			},
			address: {
				allowNull: false,
				type: DataTypes.STRING(255),
				unique: true,
			},
			profilePicture: {
				allowNull: true,
				type: DataTypes.STRING(255),
				unique: true,
				field: "profile_picture",
			},
			// createdAt: {
			// 	allowNull: false,
			// 	defaultValue: new Date(Date.now()),
			// 	type: DataTypes.DATE,
			// 	field: "created_at",
			// },
			// updatedAt: {
			// 	allowNull: false,
			// 	defaultValue: new Date(Date.now()),
			// 	type: DataTypes.DATE,
			// 	field: "updated_at",
			// },
			// deletedAt: {
			// 	allowNull: true,
			// 	type: DataTypes.DATE,
			// 	field: "deleted_at",
			// },
		},
		{
			sequelize,
			modelName: "Company",
			tableName: "company",
			underscored: true,
			freezeTableName: true,
		}
	);
	return Company;
};
