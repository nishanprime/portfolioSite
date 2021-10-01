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
