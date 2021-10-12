const userController = require("./userController");
const companyController = require("./companyController");
const userTicketController = require("./usersTicketController");
const controller = {};

controller.user = userController;
controller.company = companyController;
controller.userTicket = userTicketController;

module.exports = controller;
