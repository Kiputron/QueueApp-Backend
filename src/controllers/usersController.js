import db from "../database/models";
import bcrypt from "bcryptjs";

const { Users } = db;

const controller = {};

controller.getAll = async (req, res) => {
	try {
		const users = await Users.findAll();
		return res.status(200).json({
			users,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

controller.create = async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(req.body.password, salt);

		const user = await Users.create({ ...req.body, password: passwordHash });
		return res.status(201).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = controller;
