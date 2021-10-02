import ProjectModel from "../models/ProjectModel.js";
import asyncHandler from "express-async-handler";

export const fetchProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectModel.find({});
  res.json(projects);
});

export const getProjectDetail = asyncHandler(async (req, res) => {
  const project = await ProjectModel.findById(req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
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

export const createProject = asyncHandler(async (req, res) => {
  const project = new ProjectModel({
    name: "Sample Project",
    description: "sample description",
    demoSite: "https://sample.site.com",
    gitHubRepo: "https://github.com/sample",
    technologyUsed: ["mongo", "nodejs", "express", "js", "react"],
    image: "/images/tmart.png",
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

export const updateProject = asyncHandler(async (req, res) => {
  const { name, description, demoSite, gitHubRepo, technologyUsed, image } =
    req.body;
  console.log("object");
  const project = await ProjectModel.findById(req.params.id);

  if (project) {
    project.name = name;
    project.description = description;
    project.demoSite = demoSite;
    project.gitHubRepo = gitHubRepo;
    project.technologyUsed = technologyUsed;
    project.image = image;
    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});
