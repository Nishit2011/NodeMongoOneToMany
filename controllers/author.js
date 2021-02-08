const Author = require("../models/Author")

exports.addAuthor = (req, res, next) =>{
const author = new Author(req.body);
console.log("heere")
author.save().then(()=>{
    res.send(author)
}).catch((e)=>{
    res.status(400).send(e)
})
}

exports.getAllAuthors = async (req, res, next) =>{
    const author = await Author.find();
    res.send(author)
    
}

exports.getBookByAuthor = async (req, res, next) =>{
    const author = await Author.findOne({_id:req.params.authorId}).populate("books");
    res.send(author)
}