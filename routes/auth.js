var express = require('express');
var router = express.Router();
var passport = require('../lib/passport.js');

router.get('/login', (req, res) =>
  res.render('login')  // login.ejs 렌더링
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] })  // 구글 페이지로 이동하여 로그인
);

router.get('/google/callback',  // 로그인 성공시 이동하는 페이지
  passport.authenticate('google'),
  authSuccess  // 로그인성공시 호출되는 함수
);

function authSuccess(req, res) {
  res.redirect('/');
}

module.exports = router;
