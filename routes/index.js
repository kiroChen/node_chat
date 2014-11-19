var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '聊天室' });
});


router.get('/getuser', function(req, res) {
  var data = {
  	name:"陈泽彬",
  	sex:"男",
  	img:"/images/1.jpg"
  };
  res.json(data);
});


router.get('/getalluser', function(req, res) {
  var data = [
  {
  	name:"陈泽彬",
  	sex:"男",
  	img:"/images/1.jpg"
  },{
  	name:"陈泽彬",
  	sex:"男",
  	img:"/images/1.jpg"
  },{
  	name:"陈泽彬",
  	sex:"男",
  	img:"/images/1.jpg"
  }];
  res.json(data);
});

module.exports = router;
