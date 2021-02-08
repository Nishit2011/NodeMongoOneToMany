const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const connectDB = require("./config/db");


//Load env vars
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

const PORT = process.env.PORT;
connectDB();



const book = require("./routes/book");
const author = require("./routes/author");

app.use("/app/v1/book", book);
app.use("/app/v1/author", author);

app.use("/",(req,res)=>{
    res.json({message:"Server is Up"})
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bold.cyan )
})