import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const { company, users } = controllers;

// company
router.get("/", (req, res) => res.send("This is root!"));
router.get("/company", company.getAll);
router.get("/company/:id", company.getOne);
router.post("/company", company.create);
router.delete("/company/:id", company.destroy);

// users
router.get("/users", users.getAll);
router.post("/users", users.create);

module.exports = router;
