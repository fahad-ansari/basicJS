//async function without await

// async function printNumber(){
//         console.log("this is a function without await step");
//         return 42; // return promise(resolve) on top of 42
// }

// printNumber()
//     .then((output)=>{
//         console.log(output);
//     });


 //--------------------------------------------------------------   
// async function with a resolve and reject promise

function getInfo(){
    return new Promise((resolve,reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber>0.5){
                resolve(`The random value is ${randomNumber}`);
            }
            else{
                reject(new Error(`Condition failed ${randomNumber}`));
            }
        },2000);
    })
}

//create async function which is calling getInfo()
async function getNumbers() {
    try{
        const result = await getInfo();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

//call getNumber function

getNumbers();