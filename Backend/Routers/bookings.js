import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
  createBooking,
  getSingleBooking,
  getAllBooking,
} from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getSingleBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
