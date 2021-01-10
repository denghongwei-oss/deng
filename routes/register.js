// const express = require('express')

// var router = express.Router()
// // 要引入 user的数据库架构完成的状态
// const user = require('../sql/user')

// router.get('/',function(req,res,next){
//     console.log('此时进入了注册的/里面了')

//     res.render("register")
// })


// router.post('/in',function(req,res,next){
//     console.log('此时进入了注册的in里面了')
//     let obj = req.body
//     console.log(obj)

//     user.findOne({username:obj.username},(err,data)=>{
//         if(err){
//             console.log('err')
//         }
//         if(data) {
//             res.redirect('/register')
//         }else {
//             user.insertMany(obj,(err,data)=>{
//                 if(err){
//                     console.log(err)
//                 }
//                 console.log(data)
//                 res.redirect('/login')
//             })
//         }
//     })

    
// })




// module.exports = router;




// 1.引入express模块
const express=require('express')

// 2.引入路由表模块
var router=express.Router()

// 3.链接数据库user
const user=require('../sql/user')

router.get('/',function(req,res,next){
    console.log('进入注册页面');

    res.render('register')
})


router.post('/in',function(req,res,next){
    console.log('进入注册页面里了');
    let obj=req.body
    user.findOne({username:obj.username},(err,data)=>{
        if(err){
            console.log('注册失败');
        }
        if(data){
            console.log('用户名已经存在');
            res.redirect('/register')
        }else{
            user.insertMany(obj,(err,data)=>{
                if(err){
                    console.log(err);
                }
                console.log(data);
                res.redirect('/login')
            })
        }
    })
})

// 导出
module.exports=router;