"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CompanyDayQueue extends Model {}
	CompanyDayQueue.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
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
			modelName: "CompanyDayQueue",
			tableName: "company_day_queue",
			underscored: true,
		}
	);
	return CompanyDayQueue;
};
