var express = require('express');
var router = express.Router();
var axios = require('axios');
const { from } = require("rxjs");

/* GET home page. */
router.get('/', function (req, res, next) {
  from(axios.get('http://jsonplaceholder.typicode.com/users/?id=1'))
    .subscribe(jsonBody => {
      res.end(JSON.stringify(jsonBody.data));  
    });
});

module.exports = router;
