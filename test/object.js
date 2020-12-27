var members = ['test1', 'test2', 'test3'];
console.log(members[2]);  // test3

var roles = {
    'first':"test1",
    'second':'test2',
    'third':'test3'
};

console.log(roles.first);      // test1
console.log(roles['second']);  // test2

for(var name in roles) {
    console.log('object name = ', name);  // first, second, thired
}

for(var name in roles) {
    console.log('object value = ', roles[name]);  // test1, test2, test3
}

var f1 = function () {
    console.log(1+1);
    console.log(1+3);
}

var f2 = function () {
    console.log(5+1);
    console.log(5+3);
}

var a = [f1, f2];

a[0]();   // call f1()
a[1]();   // call f2()

var o = {
    func1:f1,
    func2:f2
};

o.func2();   // call f2();