var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ashikapramodpm:ashika@cluster0.bhwyb.mongodb.net/ccsit?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log(' db connected')
})
.catch((err) => {
    console.log(err)
})