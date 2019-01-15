var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var port = 3000;

var users = {

  'David': {
    age: 52,
    occupation: 'Professor',
    hobby: 'Swimming'
  },

  'Robert': {
    age: 34,
    occupation: 'Engineer',
    hobby: 'Running'
  },

  'Jane': {
    age: 28,
    occupation: 'Nurse',
    hobby: 'Chess'
  }

};

app.get('/', function (req,res) {
  res.send('Main page is up and running!');
});

app.get('/user', function (req, res) {
  var check = users[req.query.name];
  if(check) {
    res.render('user', {name: req.query.name, info: check });
  } else {
    res.send('User does not exist');
  }
  // var info = (check) ? check: 'User does not exist...';
  // res.send(info);
  // res.statusCode(200);
  // res.send('<html><body><h1> Hey dude! </h1></body></html>');
});

// End point or routes; function is callback
  // app.get('/user', function (req, res) {

  //   var userQuery= req.query;//{name: 'David'}
  //   var userKey = userQuery.name;
  //   console.log(userKey);//David


  //   console.log(users[userKey]);

  // var user = users[userKey]; //users['David'] truthy

//  var kevin = {
//     name: 'Kevin',
//     last_name: 'McCallister'
//   };

//   res.status(200);

//   if(user) {
//     res.json(user);
//   } else {
//     res.json(kevin);
//   }
// });

app.listen(3000, function() {
  console.log('Listening to Express at port 3000');
});