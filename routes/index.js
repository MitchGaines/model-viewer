let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'STL Model Viewer',
  });
});

router.post('/upload-stl', function(req, res, next) {
  /* */
});

module.exports = router;
