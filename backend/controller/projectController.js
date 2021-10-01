import ProjectModel from "../models/ProjectModel.js";
import asyncHandler from "express-async-handler";
export const fetchProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectModel.find({});
  res.json(projects);
});
