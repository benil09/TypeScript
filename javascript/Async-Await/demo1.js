function process(){
    console.log("start");
    setTimeout(function exec(){
        console.log("executed some task");
    },3000);
    flag = 1
    for(let i=0;i<10000000000;i++){
        // some heavy computation
        flag +=1;
    }
    console.log(flag)
    console.log("end");
}
process();
console.log(flag);
console.log("hello world");