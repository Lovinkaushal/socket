const express=require('express')
const app=express();

const http=require('http').Server(app);
const port=process.env.PORT||8080;

const io=require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/index.html'));
})
io.on('connection',socket=>{console.log(socket.id)})

app.listen(port,()=>{
    console.log(`app listening on port ${port}` )
})