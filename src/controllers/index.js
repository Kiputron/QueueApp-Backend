const company = require("./companyController");
const controller = {};
controller.company = company;
module.exports = controller;

// import db from "../database/models";
// const { Company } = db;
// const getAllCompany = async (req, res) => {
// 	try {
// 		const company = await Company.findAll();
// 		return res.status(201).json({
// 			company,
// 		});
// 	} catch (error) {
// 		return res.status(500).json({ error: error.message });
// 	}
// };
// module.exports = {
// 	getAllCompany,
// };
