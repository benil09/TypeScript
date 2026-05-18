var name = "Nilkamal";

function fun(){
    console.log("Have Fun ! " , name)
    
    var x = 10;
    function test(){
        console.log("testing",x);
    }
    test();
    console.log(x);
}

function greet(){
    console.log("Hello ! " , name)
}

fun();
greet();


if(true){
    let x = 10;
    console.log(x);
}