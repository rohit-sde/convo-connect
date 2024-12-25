import express from "express";
import authRoutes from "./auth.routes.js";
import messageRoutes from "./message.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/message", messageRoutes);
router.use("/users", userRoutes);

export default router;
