const db = require("../config/db/models");

const controller = {};

controller.getAll = async (req, res) => {
	try {
		const getTicket = await db.UsersTicket.findAll({
			include: [
				{ model: db.Users, as: "users" },
				{ model: db.Company, as: "company" },
			],
		});
		return res.status(200).json({ code: 200, success: true, data: getTicket });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
controller.getByUser = async (req, res) => {
	try {
		const getTicket = await db.UsersTicket.findAll(
			{
				where: {
					user_id: req.body.id,
				},
			},
			{
				include: [
					{ model: db.Users, as: "users" },
					{ model: db.Company, as: "company" },
				],
			}
		);
		return res.status(200).json({ code: 200, success: true, data: getTicket });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
controller.getCompanyQueue = async (req, res) => {
	try {
		const getCompanyQueue = await db.CompanyDayQueue.findAll({});
		return res
			.status(200)
			.json({ code: 200, success: true, data: getCompanyQueue });
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

controller.create = async (req, res) => {
	try {
		const { user_id, company_id, date } = req.body;

		/* update ketika company queue sudah ada */
		const check = await db.CompanyDayQueue.findOne({
			where: {
				company_id: +company_id,
				date: new Date(date),
			},
		});
		if (check !== null) {
			await db.CompanyDayQueue.update(
				{
					queue_number: check.queue_number + 1,
				},
				{
					where: {
						id: check.id,
					},
				}
			);
			const ticketUser = await db.UsersTicket.create({
				user_id: user_id,
				company_id: company_id,
				queue_number: check.queue_number + 1,
				date: new Date(date),
			});
			return res.json(ticketUser);
		} else {
			await db.CompanyDayQueue.create({
				company_id: company_id,
				queue_number: 1,
				date: new Date(date),
			});
			const ticketUser = await db.UsersTicket.create({
				user_id: user_id,
				company_id: company_id,
				queue_number: 1,
				date: new Date(date),
			});
			return res.json(ticketUser);
		}
		// return res.json(ticket);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = controller;
