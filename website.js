const http  =require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req , res)=>{
 
    console.log(req);
    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>deepansu</h1>');
    }else   if(req.url=='/ab'){
        res.statusCode=200;
        res.end('<h1>deepansu about</h1>');
    }
    else if(req.url=='/html'){
        const data  = fs.readFileSync('homeee.html')
        res.statusCode=200;
        res.end(data.toString());
    }
    
    else{
        
        res.statusCode=404;
        res.end('<h1>not fount</h1>');

    }
    res.setHeader('Content-type' , 'text/html')
   
    
})
server.listen(port , ()=>{
    console.log(
        'server is lstening on port ${port}')
})
    