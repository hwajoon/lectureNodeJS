var http = require('http');  // http module    // module.exports = { function createServer(). ... }
var fs = require('fs');      // fs module      // var fs = {}   module.exports = fs;
var url = require('url');    // url module
const { exception } = require('console');

// localhost:9090/?id=HTML
// localhost:9090/?id=CSS
// localhost:9090/?id=JavaScript

// refactoring for use function

function templateHtml(title, list, body) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>    
    `;
}

function tempateList(fileList) {
  var i=0;
  var fileHtml = '<ol>';
  while(i<fileList.length) {
    console.log(fileList[i]);
    console.log(`<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`);
    fileHtml = fileHtml + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
    i = i + 1;
  }
  fileHtml += '</ol>';
  return fileHtml;  
}

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
      if(queryData.id === undefined) {     //   localhost:9090
        fs.readdir('data', 'utf8', (err, fileList)=>{

          console.log(fileList);

          var i=0;
          var fileHtml = tempateList(fileList);

          var title = "WELCOME";
          var description = "Welcome !!!";
          var template = templateHtml(title, fileHtml, `<h2>${title}</h2>${description}`);
  
          response.writeHead(200);
          response.end(template); 
        });

 
      } else {    //  localhost:9090/id=xxxx

        console.log("exist queryData");

        fs.readdir('./data', 'utf8', (err, fileList)=>{

          console.log(fileList);

          var i=0;
          

          fs.readFile(`data/${queryData.id}`, 'utf8', (err, data) => {
            //if(err)
            //  throw new exception('error read template data');
    
            //console.log("read data = ", data);
    
            var description = data;
            var fileHtml = tempateList(fileList);
            var template = templateHtml(title, fileHtml, `<h2>${title}</h2>${description}`);
    
            response.writeHead(200);
            response.end(template);        
          });
        });
      } 
    } else {   // not root path   //  localhost:9090/xxxx.html
      response.writeHead(404);
      response.end("Not Found");    
    }

    console.log(`request.url = ${request.url}`);
    console.log(`queryData.id = ${queryData.id}`);
  
});
app.listen(9090);
