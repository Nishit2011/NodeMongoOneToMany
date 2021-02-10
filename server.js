const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const connectDB = require("./src/config/db");
const path = require("path");

//Load env vars
dotenv.config({ path: "./src/config/config.env" });

app.set('view engine', 'hbs')

const pathDir = path.join(__dirname, "./public");
app.use(express.static(pathDir));

app.get("", (req,res)=>{
    res.render('index', {
        title: "Home Page",
        name:"Nishit Ranjan-Home"
    })
})

app.get("/about", (req,res)=>{
    res.render('about', {
        title: "About Page",
        name:"Nishit Ranjan-About"
    })
})

console.log(pathDir);

app.use(express.json());

const PORT = process.env.PORT;
connectDB();



const book = require("./src/routes/book");
const author = require("./src/routes/author");

app.use("/app/v1/book", book);
app.use("/app/v1/author", author);


app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bold.cyan )
})