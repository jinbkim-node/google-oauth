var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');

app.set('view engine', 'ejs');  // ejs 세팅
app.use(session({
  secret: 'jinbkim',
  resave: false,   // 세션의 변화가 없어도 다시 저장을 할건지 
  saveUninitialized: true  // 세션에 저장할 내용이 없어도 처음부터 세션을 설정할지
}));

// passport 세팅
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => console.log('listening on port 3000...'));