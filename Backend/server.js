const bodyParser = require('body-parser');
var cors = require('cors')
const express=require('express')
const server=express();
server.use(bodyParser.json())
server.use(cors())
server.post('/register',(req,res)=>{
   
    
    const{_fstname,_lstname,_email,_password}=req.body
    const user={_fstname,_lstname,_email,_password}
    res.json(user)
    
 })
 
 
server.listen(8080)