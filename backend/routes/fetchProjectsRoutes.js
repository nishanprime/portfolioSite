import express from "express";
import {
  createProject,
  fetchProjects,
  projectsDelete,
  updateProject,
} from "../controller/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(fetchProjects).post(protect, createProject);
router.route("/delete/:id").delete(protect, projectsDelete);
router.route("/:id").put(protect, updateProject);

export default router;
