import express from "express";
import dotenv from "dotenv";
import skillsData from "./data/skillsData.js";
import projectData from "./data/projectsData.js";
import connectDB from "./config/db.js";
import ProjectRoutes from "./routes/fetchProjectsRoutes.js";
import SkillsRoutes from "./routes/fetchSkillsRoutes.js";
import AuthRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/projects",ProjectRoutes)
app.use("/api/skills",SkillsRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT}`));
