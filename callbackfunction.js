//callback function : function is passed to another function
//async call/task -- once this task is completed -- then only callback function is called

//basic callback -- sync one
function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

//callback function
function welcome(){
    console.log("Welcome to JS !!");
}

greet('Fahad',welcome);


//callback with async function
function printInfo(name, callback){
    setTimeout(function(){
        console.log('printing Info..'+name);
        callback(`please call me back`);
    },5000)
}

//callback function
function displayMessage(msg){
    console.log(msg);
}

printInfo("Fahad", displayMessage)