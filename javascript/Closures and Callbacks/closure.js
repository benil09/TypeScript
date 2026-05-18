// function todo(task){
//     console.log('start of todo')
//     setTimeout(function fun(){
//         console.log("completed: " + task);
//     },5000);
//     task = " Go to market ";
//     console.log('end of todo');
// }

// console.log("start");
// todo("Assignment");
// console.log("ending")



function a (name){
    name = `Rohan`;
    return function b(){
        console.log(name);
    }
}

let x = a("Nilkamal");
console.log('Before calling x()');


for (let i=0; i<10000000000; i++){
    // do something
}


console.log(x);
let name = "Neel";
x();