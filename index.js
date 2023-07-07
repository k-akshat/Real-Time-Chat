const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const cookieParser = require("cookie-parser");
const session = require('express-session')


const app = express();
app.use(express.static("public"));
const socket = require("socket.io");

require("dotenv").config();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


mongoose
  .connect("mongodb+srv://rp8550495:real-time-chat@cluster0.ysxboqk.mongodb.net/?retryWrites=true&w=majority", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "https://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socekt) => {
  global.chatSocket = socket;
  socket.on("add-user", (userID) => {
    onlineUsers.set(userID, socket.id);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});



// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "afdhsfhsdk",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cookieParser());
app.set("view engine", "ejs");



app.get('/',(req,res)=>{
  if(req.session.userId){
    res.render('home');
  }
  else {
    res.redirect('/login');
  }
});


app.get('/login',(req,res)=>{
  if(req.session.userId){
    res.redirect('/');
  }
  else {
    res.render('login');
  }
});

app.get('/signup',(req,res)=>{
  if(req.session.userId){
    res.redirect('/');
  }
  else {
    res.render('signup');
  }
});


app.use("/api/auth", userRoutes);
app.use("/api/message", messageRoutes);


app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("hello world");
});
