let x = setTimeout(function (){
    console.log("task completed 1");
    clearInterval(y);
},5000);

let y = setTimeout(function (){
    console.log("task completed 2 ");
},10000);