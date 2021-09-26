const userController = require("./userController");
const companyController = require("./companyController");
const controller = {};

controller.user = userController;
controller.company = companyController;

module.exports = controller;
