const { Router } = require("express");
const router = Router();
const controller = require("../controller");

const { user, company, userTicket } = controller;
// console.log(company);

/* Users */
router.get("/users", user.getAll);
router.post("/register", user.register);
router.post("/login", user.login);

/* Company */
router.get("/company", company.getAll);
router.post("/company", company.create);
router.get("/company/:id", company.getOne);
router.patch("/company/:id", company.update);
router.delete("/company/:id", company.destroy);

/* Ticket */
router.get("/userTicket", userTicket.getAll);
router.post("/userTicket", userTicket.create);
router.post("/myTicket", userTicket.getByUser);
// router.get("/companyQueue", userTicket.getCompanyQueue);

module.exports = router;
