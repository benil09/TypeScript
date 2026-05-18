function fun(x,fn){
    // x -> number 
    // fn -> callback function

    for(let i = 0 ; i<x;i++){
        console.log(i);
    }
    fn(); // calling the callback function 
}

fun( 10, function log(){ // callback function 
    console.log("custum logger");
})