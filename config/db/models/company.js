"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Company extends Model {
		static associate(models) {
			Company.hasMany(models.UsersTicket, {
				foreignKey: "company_id",
				as: "company",
			});
		}
	}
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
				type: DataTypes.STRING(45),
			},
			code_company: {
				allowNull: false,
				type: DataTypes.STRING,
				unique: true,
			},
			address: {
				allowNull: true,
				type: DataTypes.STRING(255),
			},
			profile_picture: {
				allowNull: true,
				type: DataTypes.STRING(255),
			},
		},
		{
			sequelize,
			modelName: "Company",
			tableName: "company",
			underscored: true,
		}
	);
	return Company;
};
