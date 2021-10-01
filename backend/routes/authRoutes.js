import express from "express";
import { authUser } from "../controller/userAuth.js";
const router = express.Router();

router.route("/").get(authUser);

export default router
