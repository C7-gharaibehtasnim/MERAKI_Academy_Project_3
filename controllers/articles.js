let articles = require("../models/articles");

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

module.exports = {
  getAllArticles,
  getArticlesByAuthor
};
