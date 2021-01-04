function wait(sec) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve('success resolve');
            reject('Error promise wait function');
        }, sec * 1000);
    })
}

//wait(3)
//.then((result)=>{})
//.then((result)=>{});


wait(3).then(()=>{
    console.log("done !!!")
}, (e)=>{
    console.log('1st catch in then', e);  // then에 의한 에러
})
.catch((e)=>{
    console.log('1st catch', e);
    throw e;
}).catch((e)=>{
    console.log('2nd catch', e);   // throw e에 의한  catch
});