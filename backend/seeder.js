import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/User.js";
import projects from "./data/projectsData.js";
import skills from "./data/skillsData.js";
import connectDB from "./config/db.js";
import ProjectModel from "./models/ProjectModel.js";
import UserModel from "./models/userModel.js";
import SkillModel from "./models/SkillsModel.js";
dotenv.config();

await connectDB();

const importData = async () => {
  try {
      console.log("Deleting Earlier Data")
    await UserModel.deleteMany({});
    await SkillModel.deleteMany({});
    await ProjectModel.deleteMany({});
    console.log("Trying to import data")
    await UserModel.insertMany(users);
    await SkillModel.insertMany(skills);
    await ProjectModel.insertMany(projects);
    console.log("Data imported");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

importData()