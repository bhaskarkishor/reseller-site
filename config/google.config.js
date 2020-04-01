var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
module.exports = passport.use(new GoogleStrategy({
    clientID: '744693526956-dltpt6shm7920dnhg7sdl20jalk9553d.apps.googleusercontent.com',
    clientSecret: 'GwsY7KpLDmkgCpEoZ9noWbRv',
    callbackURL: "localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));