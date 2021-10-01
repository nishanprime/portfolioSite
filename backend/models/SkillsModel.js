import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
  techName: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  expertiseInPercent: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model("Skill", SkillSchema);

export default Skill;
