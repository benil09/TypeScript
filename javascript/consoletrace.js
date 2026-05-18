function fun(){
    console.log("fun");
}

function gun(fn){
    console.log( "inside gun ");
    fn();
    console.log("Leaving gun");
    console.trace();
}

gun(function logger(){
    console.trace();
    console.log("new function passed");
})