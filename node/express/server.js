var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var multer  = require('multer')
var cookieParser = require('cookie-parser')
var util = require('util')


// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: true })

var app  = express();
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(cookieParser())
app.use('/public', express.static('public'));

app.get('/',(req,res)=>{
    res.send('这是一条测试数据')
})
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
 })

 app.get('/cookies', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
    res.send("Cookies: " + util.inspect(req.cookies));

})
 

 app.get('/ab*cl', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('正则表达');
 })

app.get('/process_get',function (req, res){
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/process_post',urlencodedParser,function (req, res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })
 
 app.post('/file_upload', function (req, res) {
 
    console.log(req.files[0]);  // 上传的文件信息
  
    var des_file = __dirname + "/uploadImg/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })


 

var server =  app.listen(8081,()=>{
    var host  =  server.address().address;
    var port = server.address().port;
    console.log('127.0.0.1:8081');
})


