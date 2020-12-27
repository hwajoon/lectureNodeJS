var http = require('http');  // http module    // module.exports = { function createServer(). ... }
var fs = require('fs');      // fs module      // var fs = {}   module.exports = fs;
var url = require('url');    // url module
const { exception } = require('console');

// localhost:9090/?id=HTML
// localhost:9090/?id=CSS
// localhost:9090/?id=JavaScript


// pathname

var app = http.createServer((request, response)=>{
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;  //  http://localhost:9090/?id=xxxx
    var title = queryData.id;

    console.log("request url = ", _url);
    console.log("queryData = ", queryData);
    console.log("pathname = ", pathname);
    console.log("title = ", title);

    if(pathname === '/') {       //   localhost:9090    or  localhost:9090/id=xxxx
      if(title === undefined) {     //   localhost:9090
        var title = "WELCOME";
        var description = "Welcome !!!";
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

        response.writeHead(200);
        response.end(template);  
      } else {    //  localhost:9090/id=xxxx
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
  
          response.writeHead(200);
          response.end(template);        
      });
      } 
    } else {   // not root path   //  localhost:9090/xxxx.html
      response.writeHead(404);
      response.end("Not Found");    
    }

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
});
app.listen(9090);
