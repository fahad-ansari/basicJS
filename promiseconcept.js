const promiseVar =new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const randomValue = Math.random();
        if(randomValue > 0.35){
                    resolve(randomValue);
        }
        else{
            reject(randomValue);
        }
    },2000);

})

promiseVar
.then(result=>{
    console.log("Promise fulfilled, value is ",result);
})
.catch(error=>{
    console.error("Promise rejcted, value is ",error);
})