function startCoffeeMachine() {
    return new Promise((resolve) => {
        console.log("Starting the coffee machine");
        setTimeout(() => {
            console.log("Please wait..!!");
            resolve("Coffee machine started");
        }, 2000);
    });
}

function grindCoffeeBeans() {
    return new Promise((resolve) => {
        console.log("Initiate grinding !!");
        setTimeout(() => {
            console.log("Grinding coffee beans...");
            resolve("Grinding coffee beans completed");
        }, 1000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        console.log("Boiling water");
        setTimeout(() => {
            console.log("Boiling water in process..");
            resolve("Water boiling ready");
        }, 1500);
    });
}

function addBoilWater(boilWater) {
    return new Promise((resolve) => {
        console.log("Adding water..");
        setTimeout(() => {
            console.log("Boiled water added");
            resolve("Boiled water added into the cup");
        }, 1000);
    });
}

function stirCoffee(coffeeinCup) {
    return new Promise((resolve) => {
        console.log("Added milk and sugar");
        setTimeout(() => {
            console.log("Stirring coffee in the cup");
            resolve("Coffee..");
        }, 3000);
    });
}

function enjoyCoffee(finalCoffee) {
    console.log("Enjoy your", finalCoffee);
}

// Promise chaining
startCoffeeMachine()
    .then((coffeeMachineStatus) => {
        console.log(coffeeMachineStatus);
        return grindCoffeeBeans();
    })
    .then((grindCoffee) => {
        console.log(grindCoffee);
        return boilWater();
    })
    .then((boiledWater) => {
        console.log(boiledWater);
        return addBoilWater(boiledWater);
    })
    .then((coffeeinCup) => {
        console.log(coffeeinCup);
        return stirCoffee(coffeeinCup);
    })
    .then((finalCoffee) => {
        enjoyCoffee(finalCoffee);
    })
    .catch((error) => {
        console.error("Error occurred..", error);
    });
