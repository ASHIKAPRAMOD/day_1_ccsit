const express=require('express')
require('./connection')
var employee=require('./model/employe')
const app=new express()
app.use(express.json())
app.get('/',(rep,res)=>{
    res.send("message for server")
})
app.get('/trial',(rep,res)=>{
    res.send("this is message for server")
})
app.listen(3004,()=>{
    console.log('port is ready')
})
app.post('/add',async(rep,res)=>{
    try{
        await employee(rep.body).save()
        res.send({message:"data added"} )
    }
    catch(error){
        console.log(error)
    }})
app.get('/veiw',async(rep,res)=>{
    try{
       var data= await employee.find()
       res.send(data)
    }
    catch(error){
        console.log(error)
    }


    })    