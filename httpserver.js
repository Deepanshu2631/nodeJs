const http  =require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req , res)=>{
    res.statusCode=200;
    console.log(req);
    res.setHeader('Content-type' , 'text/html')
    res.end('<h1>deepansu</h1>');
    
})
server.listen(port , ()=>{
    console.log(
        'server is lstening on port ${port}')
})
    