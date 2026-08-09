import express from "express";
import * as newsletterController from "../controllers/newsletter.controller.js";

const router = express.Router();

router.post("/newsletter", newsletterController.postNewsletterSubmission);

export default router;
