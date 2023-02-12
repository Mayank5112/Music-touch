const express = require("express");
const bodyParser = require('body-parser')
const ejs = require('ejs')
const port = 3010;
const User = require('./models/mongoose');
const { response } = require("express");
const bcrypt = require('bcrypt');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
    const data = await User.find({})
    res.render("home", { data: data })
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/compose", (req, res) => {
    res.render("compose")
})

app.get("/post/:postName", async (req, res) => {
    const posttitle = req.params.postName;
    const post = await User.findOne({ title: posttitle })
    // console.log(post.content)
    // console.log("This is post title " + post.title + " \nthis is post content " + post.content)
    res.render("post", { post: post })
})

app.post("/compose", async (req, res) => {
    const { title, content } = req.body;
    const newPost = User({ title: title, content: content })
    await newPost.save()
    res.redirect("/compose")
})

app.listen(port, () => {
    console.log(`listening to ${port}`)
})