const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getuserByEmail, getuserById) {
  const authenticateuser = async (email, password, done) => {
    const user = getuserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "no user with that email" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password do not match" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new localStrategy({ usernameField: "email" }, authenticateuser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getuserById(id));
  });
}
module.exports = initialize;
