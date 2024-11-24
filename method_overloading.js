//To overcome below concern and achive method overloading we can do this:

function getDetails(name, age, isHuman){
    if(typeof age==='number' && typeof isHuman==='boolean'){
        console.log(`name: ${name}, age: ${age}, isHuman: ${isHuman}`);
    }
    else if(typeof age==='number'){
        console.log(`name: ${name}, age: ${age}`);
    }
    else{
        console.log(`name: ${name}`);
    }
}

getDetails('Fahad', 30, true);
getDetails('Deepak', 28);
getDetails('Salman');


// // when we tried method over-loading it will always refer to last one
// function print(){
//     console.log(`name: ${pname}`);
// }

// function print(pname){
//     console.log(`name: ${pname}`);
// }

// function print(name, age){
//     console.log(`name: ${name} and age: ${age}`);
// }

// print();
// print('Fahad');
// print('Fahad', 30);