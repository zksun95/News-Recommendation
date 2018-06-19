var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/more_news', function(req, res, next) {
  //res.send('respond with a resource');
  news = [
    {"imageUrl":"https://i2.cdn.turner.com/money/dam/assets/170607101808-musk-tesla-fortune-500-1024x576.jpg",
    "title":"Elon Musk: Tesla worker admitted to sabotage"},
    {"imageUrl":"https://i2.cdn.turner.com/money/dam/assets/180615142525-disney-box-office-gold-text-thumbnail-1024x576.jpeg",
    "title":"The Disney magic that made 'Incredibles 2' a hit: animation and superheroes"}
  ];
  res.json(news);
});

module.exports = router;
