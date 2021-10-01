import express from "express";
import { fetchSkills, skillsDelete } from "../controller/skillsController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(fetchSkills);
router.route("/delete/:id").delete(protect, skillsDelete);

export default router;
