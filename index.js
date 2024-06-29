const http = require("http");
const {add } =require("./ExModule");
const fs = require("fs");
const url = require("url");


fs.writeFile("./hello.txt", "this is practice" , (err) => {
console.log(err);
})

http.createServer((req,res)=>{
    // console.log(req);
    // console.log(add);
   switch(req.url){
    case "/":
        res.end("homepage");
        break;
    case "/about":
        res.end("this is about page");    
   }
   

    // res.end("hello");
}).listen(8000);