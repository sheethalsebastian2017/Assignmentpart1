/*File Name; users.js
  Author; Sheethal Sebastian
  Website Name; portfolio site
  Description; respond resource
  */
 var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
