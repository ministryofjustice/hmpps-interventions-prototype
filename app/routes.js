const express = require('express');
const router = express.Router();
const app = express();



// Add your routes here - above the module.exports line

// Generic 'next page' rule
router.post('*', function (req, res, next) {
    console.log(req.body);
    if (req.body['next-page']) {
      res.redirect(req.body['next-page'])
    } else {
      next()
    }
  })
require('./views/v1/_routes.js')(router);
module.exports = router
