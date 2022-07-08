/*
    图书管理系统后台接口
*/

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const path = require('path');
const template = require('art-template');


app =  express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


// 启动静态资源服务
app.use('/www',express.static('public'));


// 设置模板引擎
// 设置模板的路径
app.set('views',path.join(__dirname,'views/user'));
// 设置模板引擎
app.set('view engine','art');
// 使express兼容art-template模板引擎
app.engine('art', require('express-art-template'));

// 处理json格式的参数
app.use(bodyParser.json());


// app.get('/',function (req,res){
//     res.sendfile(__dirname+'/views/'+'login.html');
// });

// app.get('/register.html',function (req,res){
//     res.sendfile(__dirname+'/views/'+'register.html');
// });


app.listen(8081,()=>{

    console.log('127.0.0.1:8081');
});
