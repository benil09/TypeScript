// how can we write a function to download some data from a url , and not use callbacks instead use promises
function fetch(url){
    return new Promise(function(resolve , reject){
        console.log("Started fetching data from ",url)
        setTimeout(function process(){
            let data = "Dummy data"
            console.log("Completed fetching data")
            resolve(data);// return some data on success ,  
        },4000)
    })
}


function fetch1(){
    return new Promise(function (resolve,reject){
        for(let i = 0 ; i<1000000;i++){
            // some logic
        }
        console.log("Promise resolved")
        resolve("sanket");// this will return sanket
    })
}    