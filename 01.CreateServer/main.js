var http = require('http');
var fs = require('fs');
//const { exception } = require('console');
var app = http.createServer((request, response)=>{
    var url = request.url;
    if(request.url == '/'){
        url = '/index.html';    
    }
    else if(request.url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);

    var data = fs.readFileSync(__dirname + url, 'utf8');
    //response.end(fs.readFileSync(__dirname + url));
    console.log(data);
    response.end(data);
/*    
    response.end(fs.readFile(__dirname + url, 'utf8', (err, data)=>{
        if(err)
            throw new exception("error read file");
        console.log(data);
    }));
*/    
});
app.listen(9090);

/*
var http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World\n');
    res.end();
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
*/


/*
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
*/