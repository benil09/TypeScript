for(let i = 0 ; i < 5 ; i++){
    setTimeout(function hello (){
        console.log("Hello ",i);
    },i*1000)
}

function wait(){
    console.log("waiting");
}
wait();
 