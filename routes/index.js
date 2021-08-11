var express = require('express');
var router = express.Router();

// index.ejs 렌더링, req.user를 user로 전달
// 로그인 하지 않았다면 req.user에 아무것도 없음
router.get('/', (req, res) => res.render('index', { user: req.user }));

module.exports = router;