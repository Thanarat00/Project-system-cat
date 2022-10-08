var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const  secrert = 'FullStalk';

app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_system'
  });
connection.connect();

app.post('/register',jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
           connection.execute(
        'INSERT INTO users (username, password, fname, lname,birthday, age, sex, email, tel, address, home, more, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [req.body.username, hash, req.body.fname, req.body.lname, req.body.birthday, req.body.age, req.body.sex, req.body.email, req.body.tel, req.body.address, req.body.home, req.body.more, req.body.img],
    
        function(err, results, fields) {
               if(err){
                res.json({status : "error" ,message : err })
               return
               } 
               res.json({status : "OK"})
        }  
      );
    });        
})
app.post('/login',jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM users WHERE username=?',
        [req.body.username],
        function(err, users, fields) {
               if(err){res.json({status : "error" ,message : err });return }
               if(users.length == 0){res.json({status : "error" ,message : 'no user found' }) ; return } 
               bcrypt.compare(req.body.password, users[0].password, function(err, isLogin) {
                if(isLogin){
                    var token = jwt.sign({ username: users[0].username }, secrert,{ expiresIn: '1h' });
                    res.json({status : 'ok', message : 'login success',token})
                }else{
                    res.json({status : 'error', message : 'login failed'})
                }
            });
        }  
    );
})
app.post('/authen',jsonParser, function (req, res, next) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token,  secrert);
        res.json({status : 'ok' , decoded})
    
    }catch(err){
        res.json({status : 'error' , message : err.message})
    }

})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})