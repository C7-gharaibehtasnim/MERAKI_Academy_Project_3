const express = require("express");
const { getAllArticles,getArticlesByAuthor,getArticleById,createNewArticle,updateArticleById } = require("../controllers/articles");

// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/search_1", getArticlesByAuthor)

articlesRouter.get("/search_2/:id", getArticleById)
articlesRouter.post("/", createNewArticle);
articlesRouter.put("/:id", updateArticleById)



module.exports = articlesRouter;
