"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {}
	Users.init(
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
			username: {
				allowNull: false,
				type: DataTypes.STRING(45),
				unique: true,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING(45),
				unique: true,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING(45),
			},
			address: {
				allowNull: true,
				type: DataTypes.STRING(255),
			},
			status: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			level: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			profile_picture: {
				allowNull: true,
				type: DataTypes.STRING(255),
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING(255),
			},
		},
		{
			sequelize,
			modelName: "Users",
			table: "users",
			underscored: true,
			freezeTableName: true,
			paranoid: true,
		}
	);
	return Users;
};
