import db from "../database/models";
const { Company } = db;

const controller = {};

controller.getAll = async (req, res) => {
	try {
		const company = await Company.findAll();
		return res.status(200).json({
			company,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

controller.getOne = async (req, res) => {
	try {
		const company = await Company.findByPk(req.params.id);
		return res.status(200).json({
			company,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

controller.create = async (req, res) => {
	try {
		const company = await Company.create(req.body);
		return res.status(201).json({ company });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

controller.destroy = async (req, res) => {
	try {
		await Company.destroy({ where: { id: req.params.id } });
		return res.status(200).json({
			message: "success destroy",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = controller;
