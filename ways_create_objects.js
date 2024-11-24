// ways of creating objects
//1. via Object Literals :{}
let student = {
    fname :'fahad',
    lname : 'ansari',
    age: 30
}

console.log(`My name is ${student.fname} and I'm ${student.age} years old`);

//2. via Constructor Function

function Cars(brand,model,price){
    this.brand = brand;
    this.model = model;
    this. price = price
}

const c1 = new Cars("BMW", "520d", 120000);
console.log(c1.brand+' '+c1.model+' '+c1.price);

const c2 = new Cars("Lexus", "A990", 85000);
console.log(c2.brand+' '+c2.model+' '+c2.price);

//3. via Class style
class Products{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    addToCart(){
        console.log(`${this.name} has been added to cart`)
    }
}

//create instance of class
const prod1 = new Products("Lays", "I0091871N");
console.log(prod1.name+' '+prod1.id); 
prod1.addToCart();

//4. Object.create() : with some prototype
const empPrototype = {
    printDetails:function(){
        console.log(`Hello !! my name is ${this.name}`);
    }
}

const e1 = Object.create(empPrototype);
e1.name = 'Fahad';
e1.printDetails();

//5. Using Factory Functions: returns an object
function createDept(deptName, hod){
    return{
        deptName: deptName,
        hod: hod,
        getInfo: function(){
                console.log(`Dept Name: ${deptName} and HOD: ${hod}`);
        }
    }
}

const dept1 = createDept("PWD","M. Kalyankar");
dept1.getInfo(); 

