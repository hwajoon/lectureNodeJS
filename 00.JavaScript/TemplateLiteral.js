var name1 = 'hwajoon';
var letter1 = 'AAAAAA' + name1 + '\
\
BBBBBBBB' + name1 + '\n\nCCCCCC';
console.log("letter1 = " + letter1);

console.log('============================\n');

var name2 = 'hwajoon';
var letter2 = `AAAAAA ${name2} \     
\
BBBBBBBB ${name2}\n\nCCCCCC`;
console.log("letter2 = " + letter2);