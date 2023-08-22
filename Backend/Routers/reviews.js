import express from "express";
import { creatReview } from "../Controllers/reviewController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:tourId", verifyUser, creatReview);

export default router;
