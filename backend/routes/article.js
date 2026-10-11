import express from "express";
import * as articleController from "../controllers/article.controller.js";

const router = express.Router();

router.get("/article", articleController.getArticles);
router.get("/article/:id", articleController.getArticleById);
router.post("/article", articleController.postArticle);
router.put("/article/:id", articleController.updateArticle);
router.delete("/article/:id", articleController.deleteArticle);

export default router;
