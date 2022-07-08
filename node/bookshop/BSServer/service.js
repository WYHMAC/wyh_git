/* 接口*/

const db = require('./db.js');


exports.register = (req,res) => {
    res.render('registerart');
};

exports.login = (req,res) => {
     res.render('loginart');
};


exports.registerEvent = (req,res) => {
    var name =  req.query.name;
    var password =  req.query.password;
    var user = {name:name,password:password};
    let sql = 'INSERT INTO USERTABLE SET ?'
    db.base(sql,user,(result)=>{
        res.redirect('/');
    });
};

exports.loginEvent = (req,res) => {
    var name =  req.query.name;
    var password =  req.query.password;
    var user =[name,password];
    let sql = 'select *from USERTABLE where name = ? and password = ?'
    db.base(sql,user,(result)=>{
        res.redirect('/home');
    });
};



// 渲染主页面
exports.showIndex = (req,res) => {
    let sql = 'SELECT *FROM USERTABLE';
    db.base(sql,null,(result)=>{
        res.render('index',{list : result});
    });
}

exports.home = (req,res) => {
    let sql = 'SELECT *FROM USERTABLE';
    db.base(sql,null,(result)=>{
        res.render('index',{list : result});
    });
}