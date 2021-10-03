import express from "express";
import {
  createSkill,
  fetchSkills,
  getSkillDetails,
  skillsDelete,
  updateSkill,
} from "../controller/skillsController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(fetchSkills).post(protect, createSkill);
router.route("/:id").put(protect, updateSkill).get(protect, getSkillDetails);
router.route("/delete/:id").delete(protect, skillsDelete);

export default router;
