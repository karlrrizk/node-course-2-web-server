const express = require ('express');
const hbs = require ('hbs');

var app = express();

//Partials use
hbs.registerPartials(__dirname + '/views/partials')

//Helper use to avoid the repetitive use of currentYear
hbs.registerHelper('getCurrentYear', function (){
  return new Date().getFullYear()
});

//Get the message in upper case
hbs.registerHelper('screamIt', function (){
  return text.toUpperCase();
});

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//Middleware Use: Prints on the terminal the exact timing and keeps track of how
//the server works step by step
app.use(function (req, res, next){
  var now = new Date().toString();
  console.log(now + ': ' + req.method req.url);
  //appendFile is used to add someting to our file
  fs.appendFile('server.log', log + '\n'
  //next is used to move from one command to the other
  next()
});

// app.use(function (req,res,next){
//   res.render('maintenance.hbs');
//   //when we don't add next here, the server will stop here and will no longer
//   //continue!
// })

//HTTP get request
app.get('/', function (req, res){
  res.render('home.abs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my Website',
    // currentYear: new Date().getFullYear()
  });
});

app.get('/about', function (req, res){
  res.render('about.hbs', {
    pageTitle: 'About Page',
    // currentYear: new Date().getFullYear()
  });
});

app.get('/bad', function (req, res){
  res.send({
    errorMessage: 'Unable to handle request'
  })
});

//bind application to a port on our machine: port 3000
app.listen(3000);
