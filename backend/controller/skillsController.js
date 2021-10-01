import asyncHandler from "express-async-handler";
import SkillModel from "../models/SkillsModel.js";
export const fetchSkills = asyncHandler(async (req, res) => {
  const skills = await SkillModel.find({});
  res.json(skills);
});
