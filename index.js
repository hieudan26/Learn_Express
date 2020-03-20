const express = require('express');
const app= express();
const port =3000;
app.get("/",(request,response)=>{
	response.send('<h1 style"color: red;">hello world</h1>');
});
app.get("/users",(request,response)=>{
	response.send('Nguyễn Hiếu Đan');
});
app.listen(port,()=>console.log("your port: "+port));