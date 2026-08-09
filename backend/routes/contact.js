import express from "express";
import * as contactController from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/contact", contactController.postContactForm);

export default router;
