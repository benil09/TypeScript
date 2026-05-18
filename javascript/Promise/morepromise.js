function morePromise(){
    return new Promise(function (resolve,reject){
        console.log("Hello")
        setTimeout(function process(){
            //some logic
            console.log("Wohoo ! Task done ✅")
            resolve("Students are the best")
        },10000)
        console.log("Bye")
    })
}


function demo1(val){
    return new Promise(function (resolve,reject){
        console.log("Start")
        setTimeout(function process(){
            console.log("Completed timer")
            if(val%2 == 0){
                resolve("Even")
            }else{
                reject("Odd");
            }
        },1000)
        console.log("Somewhere")
    })

}