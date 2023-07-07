const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/',(req, res)=>{
  res.render('home');
});

app.get('/login',(req, res)=>{
  res.render('login');
});

app.get('/signup',(req, res)=>{
  res.render('signup');
});

app.listen(3000, ()=>{
  console.log("Listening at port 3000");
});
