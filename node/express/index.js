var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : '192.168.2.131',
    user     : 'root',
    password : '*WYH0320*lcy',
    database : 'books'
  });

connection.connect();

 
var  sql = 'SELECT * FROM teacher';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();