const Book = require("../models/Books");
const Author = require("../models/Author");

exports.addBook = async (req, res, next) =>{
   
    // console.log(req.params)

    const author = await Author.findOne({_id:req.params.authorId});

    const book = new Book(req.body);
    
    book.creator = author._id;
    // console.log(authorName)
    await book.save();

    author.books.push(book._id);
    await author.save();

    res.send(book);
}

