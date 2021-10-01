import express from "express";
import { fetchProjects, projectsDelete } from "../controller/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(fetchProjects);
router.route("/delete/:id").delete(protect, projectsDelete)
export default router
