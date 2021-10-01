import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demoSite: {
    type: String,
    required: true,
  },
  gitHubRepo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologyUsed: [
    {
      type: String,
      required: true,
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
