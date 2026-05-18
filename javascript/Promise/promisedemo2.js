function fetchData(url){
    console.log("fetch data")
    return new Promise(function (resolve,reject){
        console.log("goint to start the download")
        setTimeout(function process(){
            let data = "Dummy data downloaded"
            console.log("download complete")
            resolve(data) // * calling the resolve function means the promise is resolved
            
        }, 10000);
        console.log("Timer to mimic the download started")
    })
}

console.log("Starting the program")
console.log("We are expecting to mimic the downloader")
x=fetchData('www.google.com')
console.log(x);
console.log("New promise object created successfully,but downloading is still going on")
setTimeout(()=>{
    console.log(x)
},12000)