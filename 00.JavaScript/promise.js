/*
ajax('http://a.com/api/book', (result)=>{
    console.log(result);
});
*/

function delay(sec, callback) {
    setTimeout(()=>{
        callback(new Date().toISOString());
    }, sec * 1000);
}

console.log('start', new Date().toISOString());

delay(1, (result)=>{
    console.log(1, result);

    delay(1, (result)=>{
        console.log(2, result);

        delay(1, (result)=>{
            console.log(3, result);
        });
    });
});

function delayP(sec) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString());
        }, sec * 1000);
    })
}

delayP(1).then((result)=>{
    console.log('promise 1 ', result);
    return delayP(1);
}).then((result)=>{
    console.log('promise 2 ', result);
    return delayP(1);
}).then((result)=>{
    console.log('promise 3 ', result);
    return 'end';
}).then((result)=>{
    console.log('not result ', result);
});