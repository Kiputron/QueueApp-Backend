"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class UsersTicket extends Model {
		static associate(models) {
			UsersTicket.belongsTo(models.Users, {
				foreignKey: "user_id",
				as: "users",
			});
			UsersTicket.belongsTo(models.Company, {
				foreignKey: "company_id",
				as: "company",
			});
		}
	}
	UsersTicket.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			company_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			queue_number: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			date: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "UsersTicket",
			tableName: "user_ticket",
			underscored: true,
		}
	);
	return UsersTicket;
};
