var http = require('http');  // http module    // module.exports = { function createServer(). ... }
var fs = require('fs');      // fs module      // var fs = {}   module.exports = fs;
var url = require('url');    // url module
//const { exception } = require('console');
var app = http.createServer((request, response)=>{
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    console.log(`request.url = ${request.url}`);
    console.log(`queryData.id = ${queryData.id}`);

    if(request.url == '/'){
        _url = '/index.html';    
    }
    else if(request.url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    //console.log(__dirname + _url);

    //var data = fs.readFileSync(__dirname + _url, 'utf8');
    //response.end(fs.readFileSync(__dirname + _url));

    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${queryData.id}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">${queryData.id}</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${queryData.id}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="nodejs.jpg" width="30%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>    
    `;
    response.end(template);
    //response.end(queryData.id);
});
app.listen(9090);
