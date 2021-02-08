const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    age:{
        type: Number
    },
    nationality: {
        type: String
    },
    books: [
        { type: mongoose.Schema.ObjectId, ref: 'Book' }
      ]
});

module.exports = mongoose.model("Author", AuthorSchema)