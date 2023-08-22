import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../Controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Create New Tour
router.post("/", verifyAdmin, createTour);

// Update Tour
router.put("/:id", verifyAdmin, updateTour);

// Delete Tour
router.delete("/:id", verifyAdmin, deleteTour);

// Get Single Tour
router.get("/:id", getSingleTour);

// Get All Tour
router.get("/", getAllTours);

// Get Tour By Search
router.get("/search/getTourBySearch", getTourBySearch);

// Get Tour By Feature
router.get("/search/getFeaturedTours", getFeaturedTours);

// Get Tour Count
router.get("/search/getTourCount", getTourCount);

export default router;
