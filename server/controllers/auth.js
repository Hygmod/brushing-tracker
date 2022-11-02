const passport = require("passport")
const validator = require("validator")
const User = require("../models/User")

exports.getLogin = (req, res) => {
  console.log("req", req.user)
  if (req.user) {
    return req.user
  }
  // res.render("login", {
  //   title: "Login",
  // })
}

exports.postLogin = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: "Password cannot be blank." })

  console.log("auth controller postLogin validationErrors", validationErrors)
  // return res.redirect("/login")

  req.body.username = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  })

  passport.authenticate("local", (err, user, info) => {
    console.log("auth controller postLogin err, user, info:", err, user, info)
    if (err) {
      return next(err)
    }
    if (!user) {
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      console.log("auth controller postLogin successful login", user)
      return res
    })
  })(req, res, next)
}

exports.logout = (req, res) => {
  req.logout(() => {
    console.log("User has logged out.")
  })
  req.session.destroy((err) => {
    if (err) console.log("Error : Failed to destroy the session during logout.", err)
    req.user = null
    // res.redirect("/")
  })
}

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile")
  }
  res.render("signup", {
    title: "Create Account",
  })
}

exports.postSignup = (req, res, next) => {
  console.log("req.body", req.body)

  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." })
  if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: "Password must be at least 8 characters long" })
  if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: "Passwords do not match" })

  // req.flash("errors", validationErrors);
  console.log("validationErrors", validationErrors)
  // return res.redirect("../signup")

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  })

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  })

  console.log("user", user)

  User.findOne({ $or: [{ email: req.body.email }, { userName: req.body.userName }] }, (err, existingUser) => {
    if (err) {
      return next(err)
    }
    if (existingUser) {
      console.log("Account with that email address or username already exists.")
    }
    user.save((err) => {
      if (err) {
        return next(err)
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
      })
    })
  })
}
