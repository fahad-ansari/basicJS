class Cars{
   constructor(brand, model, color, price){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
   }

   startEngine(){
    console.log('Engine started..');
   }

   stopEngine(){
    console.log('Engine stopped..');
   }
}

// now create an instance using 'new' keywoard
const c1 = new Cars('Mercedes','A9','Black', 1200);
console.log(`Brand: ${c1.brand} Model: ${c1.model} Color: ${c1.color} Price: ${c1.price}`);
c1.startEngine();
c1.stopEngine();

const c2 = new Cars('Audi',1800);
console.log(`Brand: ${c2.brand} Model: ${c2.model} Color: ${c2.color} Price: ${c2.price}`);

console.log(24/1);

const dep = 'fahad';
{
const dep = 'deepak';
console.log(dep);
}
console.log(dep);

