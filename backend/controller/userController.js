import axios from "axios";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import UserModel from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Not authorized user. Please check your credentials");
  }
});

export const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(401);
    throw new Error("Not authorized user. Please check your credentials");
  }
});
