var http = require('http');
// 用于请求的选项
var options = {
    host: '192.168.2.131',
    port: '8082',
    path: '/index.html'  
 };
 var callback = (response)=>{
     var body = '';
     response.on('data', function(data) {
        body += data;
        // console.log('datadata'+data);

     });
     response.on('end', function() {
        console.log(body);
     });
 }
  
 var req = http.request(options, callback);
 req.end();