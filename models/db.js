const





var connection = mysql.createConnection({
  host: 'localhost',
  database: 'node1',
  user: 'root',
  password: ''
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query(sql, function (error, results) {
		
  // console.log(results[0].username);
           
   if(results.length > 0){

      res.cookie('uname', req.body.username);
       res.redirect('/home');
   }else{
         res.redirect('/login');
   }


});


connection.end(function (err) {
  console.log('connection end');
});

