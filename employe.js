var mongoose=require('mongoose');
var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Departments:String,
    Salary:Number
})
var employee1=mongoose.model('employee',schema)
module.exports=employee1