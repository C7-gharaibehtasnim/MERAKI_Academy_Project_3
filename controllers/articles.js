let articles = require("../models/articles");
const { uuid } = require("uuidv4");

// 1. this function return all articles
const getAllArticles = (req, res) => {
  res.json(articles);
};
const getArticlesByAuthor = (req, res) => {
  const author = req.query.author;
  console.log(typeof author);
  let myart;

  const result = articles.filter((elemnt) => {
    console.log(typeof elemnt.author);
    console.log(elemnt.author == author);
    return elemnt.author == author;
  });
  res.status(200).json(result);
};
const getArticleById = (req, res) => {
  const id = req.params.id;
  const result = articles.filter((elemnt) => elemnt.id == id);
  res.status(200).json(result);
};
const createNewArticle = (req, res) => {
  const NewArticle = req.body;
  console.log(uuid());

  NewArticle.id = uuid();
  articles.push(NewArticle);
  res.status(201).json(articles);
};

const updateArticleById = (req, res) => {
  const id = req.params.id;
  const newdata = req.body;
  const found = articles.find((elemnt) => elemnt.id == id);
  if (found) {
    articles.splice(found, 1, {
      title: newdata.title || found.title,
      description: newdata.description || found.description,
      author: newdata.author || found.author,
    });
    res.status(200).json(articles);
  } else {
    res.json("this Article not found ");
  }
};
const deleteArticleById=(req,res)=>

{
  const id = req.params.id;
  
  
  const found = articles.find((elemnt) => elemnt.id == id);
  if (found) {
    articles.splice(found,1)
    res.status(200).json({sucess:true,message: `Succeeded to delete article with id:${id}`})
  }
else
{
  res.status(404).json({sucess:false,message: `failed to delete article with id:${id}`})

}

}
const deleteArticlesByAuthor=(req,res)=>
{
  const author = req.params.name;
  
  
  const found = articles.find((elemnt) => elemnt.author == author);
  if (found) {
    articles.splice(found,1)
    res.status(200).json({sucess:true,message: `Succeeded to delete article with id:${author}`})
  }
else
{
  res.status(404).json({sucess:false,message: `failed to delete article with id:${author}`})

}

}
module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getArticleById,
  createNewArticle,
  updateArticleById,
  deleteArticleById,
  deleteArticlesByAuthor
};
