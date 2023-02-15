let articles = require("../models/articles");
const {uuid}  = require('uuidv4');

// 1. this function return all articles
const  getAllArticles = (req, res) => {

 res.json(articles)



}
const getArticlesByAuthor=(req,res)=>
{
  const author=req.query.auther
  console.log(typeof author);
  let myart;

 const result= articles.filter((elemnt)=>{
  
console.log(typeof elemnt.author);
console.log(elemnt.author==author)
return elemnt.author==author
  
 })
 res.status(200).json(result) 
}
const getArticleById=(req,res)=>
{
  const id=req.params.id
 const result= articles.filter(elemnt=>elemnt.id==id)
 res.status(200).json(result)
}
const createNewArticle=(req,res)=>
{
  const NewArticle=req.body
  console.log(uuid())


  NewArticle.id=uuid()
  articles.push(NewArticle)
  res.status(201).json(articles)
}
module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getArticleById,
  createNewArticle
};
