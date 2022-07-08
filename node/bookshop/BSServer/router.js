/**
 * 路由接口
 */
 const express = require('express');
 const router = express.Router();
 
 const service = require('./service.js');

 router.get('/register',service.register); //注册
 router.get('/login',service.login); //登录
 router.get('/',service.login);
 router.get('/registerEvent',service.registerEvent); //注册
 router.get('/loginEvent',service.loginEvent); //注册
 router.get('/home',service.home); //注册


 

 module.exports = router;