const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    year:{
        type: Number
    },
   creator:{
    type: mongoose.Schema.ObjectId,
    ref: "Author"
   
   }
});

module.exports = mongoose.model("Book", BookSchema);