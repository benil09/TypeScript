let y = setInterval(function (){
    console.log("hello");

    setTimeout(function (){
        clearInterval(y)
    },12000);
},2000);