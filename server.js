if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { name } = require("ejs");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const initializePassport = require("./passport-config");
const methodoverride = require("method-override");
app.use(express.urlencoded({ extended: false }));
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodoverride("_method"));
const users = [];

///setting view engine
app.set("view-engine,ejs");
//get route
app.get("/", checkauthenticated, (req, res) => {
  res.render("index.ejs", { devName: req.user.name });
});

//register route
app.get("/register", checknotauthenticated, (req, res) => {
  res.render("register.ejs");
});

//login route
app.get("/login", checknotauthenticated, (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  checknotauthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.post("/register", checknotauthenticated, async (req, res) => {
  try {
    const hassedpwd = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now.toString(),
      name: req.body.name,
      email: req.body.email,
      password: hassedpwd,
    });
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(users);
});

app.delete("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
  console.log("user has logged out");
});

function checkauthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checknotauthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

app.listen(2000);
