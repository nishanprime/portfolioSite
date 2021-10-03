import asyncHandler from "express-async-handler";
import SkillModel from "../models/SkillsModel.js";
export const fetchSkills = asyncHandler(async (req, res) => {
  const skills = await SkillModel.find({});
  res.json(skills);
});

export const skillsDelete = asyncHandler(async (req, res) => {
  const skill = await SkillModel.findById(req.params.id);
  if (skill) {
    await skill.remove();
    const skills = await SkillModel.find({});
    res.json(skills);
  } else {
    res.status(404);
    throw new Error("Skill not found");
  }
});

export const getSkillDetails = asyncHandler(async (req, res) => {
  const skill = await SkillModel.findById(req.params.id);
  if (skill) {
    res.json(skill);
  } else {
    res.status(404);
    throw new Error("Skill not found");
  }
});

export const createSkill = asyncHandler(async (req, res) => {
  const skill = new SkillModel({
    techName: "Mongo-DB",
    experience: "2 years",
    image: "/images/pp.png",
    expertiseInPercent: "50%",
  });

  const createdSkill = await skill.save();
  res.status(201).json(createdSkill);
});

export const updateSkill = asyncHandler(async (req, res) => {
  const { techName, experience, image, expertiseInPercent } = req.body;

  const skill = await SkillModel.findById(req.params.id);

  if (skill) {
    skill.techName = techName;
    skill.experience = experience;
    skill.image = image;
    skill.expertiseInPercent = expertiseInPercent;
    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } else {
    res.status(404);
    throw new Error("Skill not found");
  }
});
