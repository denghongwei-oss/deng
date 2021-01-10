//test是一个测试文件 不要在项目中使用  


  
const db = require('./db.js')
 
// 类似于lol 中的六神装 不能七神装的数据管理 fdsfsdfsdfsdf
const orderSchema = new db.mongoose.Schema ({
    "orderName":{type:String},
    "sex":{type:String},
    "age":{type:Number},
    "year":{type:Number},
    "pay":{type:Number}
})

 
module.exports = db.mongoose.model("order",orderSchema)
