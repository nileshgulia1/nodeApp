var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

res.render('pages/index');
});
// START THE SERVER

app.listen(8080);
console.log('App started! Look at http://localhost:8080');