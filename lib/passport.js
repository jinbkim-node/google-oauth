var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

require("dotenv").config();

passport.serializeUser((user, done) => done(null, user));  // 세션에 user 저장
passport.deserializeUser((user, done) => done(null, user));  // user : 세션에 저장되어있는 user

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
  }, (request, accessToken, refreshToken, profile, done) => {  // 로그인에 성공하면 해당 콜백함수가 호출됨
    var user = profile;
    done(null, user);  // user : serializeUser의 user로 전달
  }
));

module.exports = passport;