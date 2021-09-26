const { Op } = require("sequelize");
const db = require("../config/db/models");
const generateCode = require("../helper/generateCode");
const controller = {};

controller.getAll = async (req, res) => {
	try {
		const company = await db.Company.findAll();
		return res.status(200).json({ company });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.create = async (req, res) => {
	try {
		let newCode = "";
		const firstChar = req.body.name.charAt(0);
		// Warung makan
		// W

		/* Get last code number in db*/
		const getData = await db.Company.findOne({
			where: {
				name: {
					[Op.like]: `${firstChar}%`,
				},
			},
			order: [["id", "DESC"]],
		});
		if (getData !== null) {
			const getLastCodeNumber = getData?.code_company.substring(1, 4);
			newCode =
				firstChar.toLocaleUpperCase() +
				generateCode(Number(getLastCodeNumber) + 1, 3);
		} else {
			newCode = firstChar.toUpperCase() + generateCode(1, 3);
		}
		const company = await db.Company.create({
			...req.body,
			code_company: newCode,
		});
		return res.status(201).json({ company });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.getOne = async (req, res) => {
	try {
		const company = await db.Company.findByPk(req.params.id);
		return res.status(200).json({ company });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.update = async (req, res) => {
	try {
		const company = await db.Company.update(
			{ ...req.body },
			{
				where: {
					id: req.params.id,
				},
			}
		);
		return res.status(201).json({ pesan: "data berhasil di update" });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.destroy = async (req, res) => {
	try {
		await db.Company.destroy({
			where: {
				id: req.params.id,
			},
		});
		return res.status(200).json({ pesan: "data telah di hapus" });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = controller;
