//REQUIRE THE INSTALLED DEPENDENCIES 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");


//INITIALIZE AN APP WITH EXPRESS
const app = express();

//USE THE REQUIRED DEPENDENCIES
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
    session({
    secret: "our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

//INITIALIZING PASPORT AND SETTING IT TO USE SESSION

app.use(passport.initialize());
app.use(passport.session());

//SETTING THE DATABASE
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
  },

  lastname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },

  typeOfJob: {
    required: true,
    type: String,
  },
  employer: {
    required: true,
    type: String,
  },

  role: {
    required: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },

 meetingData : {
    time: {
        type: String,
    },
    date: {
        type: Date,

    },
    titleOfMeeting: {
        type: String,
    },
    meetingPassword: {
        type: String,
    },
    meeting_id: {
        type: String,
    },
    meeting_url: {
        type: String,
    }

 },
  googleId: String,
  secret: [String],
});

//USE SOME SPECIFIC DEPENDENCIES AS PLUGINS

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

//CREATE A NEW MONGOOSE MODEL
const User = mongoose.model("User", userSchema);


//SERIALIZE USER WITH PASSPORT
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

//SERIALIZE USER ALTERNATIVE

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//USE GOOGLE PASSPORT AUTHENTICATION

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

//GET ROUTES BEGINS

app.get("/", function (req, res) {
  res.render("home");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});


app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});


/*   MORE GET ROUTES HERE   */ 


//GET ROUTES ENDS


//POST ROUTES BEGINS

app.post("/register", function (req, res) {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );

  
});

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secrets");
      });
    }
  });

  
});


/*MORE POST ROUTES HERE*/ 

//POST ROUTES ENDS




//SET THE INITIALIZED APP TO LISTEN ON A PORT(3000)
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});