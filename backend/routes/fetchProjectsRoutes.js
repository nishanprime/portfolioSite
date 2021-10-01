import express from "express";

import { fetchProjects } from "../controller/projectController.js";
const router = express.Router();

router.route("/").get(fetchProjects);
export default router
