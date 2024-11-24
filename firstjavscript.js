//console.log("First Javascript");

// let heroes =["iroman","spiderman","hulk","ant-man"]

// heroes.forEach((hero,idx,heroes) => {
//     console.log(hero,idx);
// });

// let arr = [1,2,3,4,5]

// let numSquare = (num)=>{
//     console.log(num*num);
// }

// arr.forEach(numSquare);

// let marks = [76,49,92,81,86,88,94,54]

// let op = marks.filter((val)=>{
//     return val > 85;
// });

// console.log(op);

let n = prompt("Enter a number")

let arr = [];

for(let i=1; i<=n; i++){
        arr[i-1]=i;
}

console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);

let prod=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(prod);

