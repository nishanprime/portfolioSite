import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
expressAsyncHandler;
import UserModel from "../models/userModel.js";

export const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await UserModel.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized user");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized user");
  }
});