const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const connectDB = require("./src/config/db");
const path = require("path");
const hbs = require("hbs");
//Load env vars
dotenv.config({ path: "./src/config/config.env" });



const pathDir = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')
app.set('view engine', 'hbs');

app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Nishit'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Nishit'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Nishit'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Nishit',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Nishit',
        errorMessage: 'Page not found.'
    })
})

console.log(pathDir);

app.use(express.json());

const PORT = process.env.PORT;
connectDB();



const book = require("./src/routes/book");
const author = require("./src/routes/author");
const upload = require("./src/routes/fileupload");

app.use("/app/v1/book", book);
app.use("/app/v1/author", author);
app.use("/app/v1/upload", upload);




app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`.bold.cyan )
})