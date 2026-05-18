// * Tasks
// ? 1. write a function to download data from url
// ? 2. once the data is downloaded save the data to a file and return the file name
// ? 3. write a function to upload the file to some new url


function fetchData(url){
        return new Promise(function (resolve,reject){
            console.log("Download started from ", url)
            setTimeout(() => {
                let data="dummy data"
                console.log("Download Complete")
                resolve(data)
                console.log("Hello")
            }, 7000);
        })
}

// 

function writeFile(data){
    return new Promise(function (resolve,reject){
        console.log("Writing started data in a file")
        setTimeout(function processWriting(){
            let fileName = "abcd.txt"
            console.log("File written successfully")
            resolve(fileName)

        },3000)
    })
}

function uploadFile(data,url){
    return new Promise(function (resolve,reject){
            console.log("Reading of file started")
            setTimeout(function processUpload() {
                let result = "success"
                console.log("Uploading done ☑️")
                resolve(result)

            }, 5000);
    })
}

// ! The below code will not work since the code is synchronous and JS does not wait for the promise to be fulfilled.
// *let data = fetchData('www.google.com') 
// *let fileName = writeFile(data);
// *let response = uploadFile(fileName,'www.abcd.com');

// ? The above problem could be resolved by the use of .then() function

// let response = fetchData('www.google.com')
//  response.then(function processDownload(value){
//     console.log("Download Promise Fulfilled")
//     let writePromise = writeFile(value);
//     writePromise.then(function processWrite(value){
//         console.log("Writing of file completed")
//         console.log(value)
//     })
//  })


/*  
! above piece of code solves the problem of inversion of control , 
! but still the problem of callback hell / promise hell still exists
*/

let downloadPromise = fetchData('www.google.com');
downloadPromise.then(function processDownload(value){
    console.log("Download Completed with the following value " , value)
    return value;
})
.then(function processWrite(value){
    return writeFile(value)
})
.then(function processUpload(value){
    console.log("Upload started")
    return uploadFile(value,'www.drive.com') 
})