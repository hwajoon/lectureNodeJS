
var template = {
    html:function(title, list, body, control) {
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
        ${control}
        ${body}
      </body>
      </html>    
      `;
    },
    list:function(fileList) {
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
  }

  module.exports = template;