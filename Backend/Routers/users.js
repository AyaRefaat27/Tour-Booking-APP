import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../Controllers/userControllers.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyUser, updateUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get Single User
router.get("/:id", verifyUser, getSingleUser);

// Get All User
router.get("/", verifyAdmin, getAllUsers);

export default router;
