let articles = require("../models/articles");

// 1. this function return all articles
const  getAllArticles = (req, res) => {

 res.json(articles)



}

module.exports = {
  getAllArticles,
};
