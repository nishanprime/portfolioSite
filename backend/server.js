import express from "express";
import dotenv from "dotenv";
import path from "path";
import skillsData from "./data/skillsData.js";
import projectData from "./data/projectsData.js";
import connectDB from "./config/db.js";
import ProjectRoutes from "./routes/fetchProjectsRoutes.js";
import SkillsRoutes from "./routes/fetchSkillsRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import UploadRoutes from "./routes/uploadRoutes.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  console.log("I am ina")

  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    console.log("I am in")
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use("/api/projects", ProjectRoutes);
app.use("/api/skills", SkillsRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/upload", UploadRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT}`));
