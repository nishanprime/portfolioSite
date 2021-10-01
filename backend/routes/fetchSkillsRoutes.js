import express from "express";
import { fetchSkills } from "../controller/skillsController.js";

const router = express.Router();

router.route("/").get(fetchSkills);

export default router
