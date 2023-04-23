//create a server  
//Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000

var http=require('http');
var fs=require('fs')


http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.write('Hello Node!!!!');
    res.end()

    //First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
//Second, create a program that reads and console.log data from hello.txt
fs.appendFile('welcome.txt', 'Hello Node' ,(err)=>{
    if(err){
    console.log(err);
    }
    res.write('Hello Node')
})
fs.readFile('./hello.txt',(err)=>{
    if(err){
        console.log(err);
    }
    res.write(data);
    res.end()
})
}).listen(3000)

