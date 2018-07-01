var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
     getJSON(res);
});

async function getJSON(res){
  try{
    var result = await axios.get('http://jsonplaceholder.typicode.com/users/?id=1');
    res.end(JSON.stringify(result.data));
  }
  catch (err) {
    res.render('error',{'error':err,'message':err.message});
  }
}

module.exports = router;
