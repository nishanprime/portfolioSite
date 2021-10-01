import ProjectModel from "../models/ProjectModel.js";
import asyncHandler from "express-async-handler";
export const fetchProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectModel.find({});
  res.json(projects);
});

export const projectsDelete = asyncHandler(async (req, res) => {
  const project = await ProjectModel.findById(req.params.id);
  if (project) {
    await project.remove();
    const projects = await ProjectModel.find({});
  res.json(projects);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
  

});
