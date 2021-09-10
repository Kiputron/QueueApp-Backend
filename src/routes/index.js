import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const { company } = controllers;

router.get("/", (req, res) => res.send("This is root!"));
router.get("/company", company.getAll);
router.post("/company", company.create);

module.exports = router;
