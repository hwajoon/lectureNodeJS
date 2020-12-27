var fs = require('fs');  

console.log("entry");

fs.readFile('CSS', 'utf8', function(err, data){

    console.log("call");

    if(err)
        throw err;

    console.log(data);
});