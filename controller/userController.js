const db = require("../config/db/models");
const bcrypt = require("bcrypt");
const controller = {};

controller.getAll = async (req, res) => {
	try {
		const getUser = await db.Users.findAll();
		return res.status(200).json({ getUser });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.register = async (req, res) => {
	try {
		const salt = 10;
		const User = await db.Users.create({
			...req.body,
			password: await bcrypt.hash(req.body.password, salt),
			status: 0,
			level: 1,
		});
		return res.status(200).json({ User });
	} catch (error) {
		return res.status(400).json(error.errors[0].message);
	}
};

controller.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const getData = await db.Users.findOne({
			where: {
				email: email,
			},
		});

		if (getData !== null) {
			const result = await bcrypt.compare(password, getData.password);
			if (result === true) {
				return res.status(200).json({ getData });
			} else {
				return res.status(401).json({ pesan: "password tidak sesuai" });
			}
		} else {
			return res.status(401).json({ pesan: "Email tidak terdaftar" });
		}
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = controller;
