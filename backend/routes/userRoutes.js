import express from "express";
import { authUser, getUserProfile } from "../controller/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();


router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile)
export default router;
