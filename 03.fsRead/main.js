var http = require('http');  // http module    // module.exports = { function createServer(). ... }
var fs = require('fs');      // fs module      // var fs = {}   module.exports = fs;
var url = require('url');    // url module
const { exception } = require('console');

// localhost:9090/?id=HTML
// localhost:9090/?id=CSS
// localhost:9090/?id=JavaScript

var app = http.createServer((request, response)=>{
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(`request.url = ${request.url}`);
    console.log(`queryData.id = ${queryData.id}`);

    if(_url == '/'){
        title = 'welcome';  
    }
    else if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
/*
    fs.readFile(`data/${queryData.id}`, 'utf8', (err, data)=>{
      console.log("sync read data = ", data);
    });
*/    
    fs.readFile(`data/${queryData.id}`, 'utf8', (err, data) => {
        //if(err)
        //  throw new exception('error read template data');

        //console.log("read data = ", data);

        if(data == undefined)
          data = "Welcome !!!";

        var description = data;

        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>    
        `;

        console.log("read template = ", template);
        
        response.writeHead(200);
        response.end(template);        
    });
    
});
app.listen(9090);
