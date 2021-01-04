function delayP(sec) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString());
        }, sec * 1000);
    })
}

function myFunc() {
    return 'func';
}

async function myAsync() {
    console.log('before myAsync');
    await delayP(3);
    console.log('after myAsync');
    return 'async func';
}

async function myAsync2() {
    console.log('before myAsync2');
    //const time = await delayP(3);
    //console.log('myAsync2 ', time);

    const result = await delayP(3).then((time)=>{
        console.log('myAsync2 ', time);
        return 'x';
    }).then((result)=>{
        console.log('inner result = ', result);  // 'x'
    });
    console.log('result = ', result);
    console.log('after myAsync2');
    return 'async func2';
}

//console.log(myFunc());    // func
//console.log(myAsync());   // Promise { 'async' }

myAsync().then((result)=>{
    console.log(result);
});

myAsync2().then((result)=>{
    console.log(result);
});